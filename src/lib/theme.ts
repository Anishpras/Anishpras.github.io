import { useCallback, useSyncExternalStore } from "react";

import { META_THEME_COLORS } from "@/config/site";

/**
 * A tiny replacement for next-themes. The theme is stored in
 * localStorage("theme") as "light" | "dark" | "system" and applied as a class
 * on <html>. The inline script in BaseLayout applies it before first paint.
 */
export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function readTheme(): Theme {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function resolve(theme: Theme): "light" | "dark" {
  if (theme === "system") return systemPrefersDark() ? "dark" : "light";
  return theme;
}

export function applyTheme(theme: Theme) {
  const resolved = resolve(theme);
  const root = document.documentElement;

  // Suppress transitions while switching (as next-themes' disableTransitionOnChange).
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(style);

  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", META_THEME_COLORS[resolved]);

  window.getComputedStyle(document.body);
  setTimeout(() => style.remove(), 1);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onMedia = () => {
    if (readTheme() === "system") applyTheme("system");
    listener();
  };
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      applyTheme(readTheme());
      listener();
    }
  };
  media.addEventListener("change", onMedia);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onMedia);
    window.removeEventListener("storage", onStorage);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "system");
  const resolvedTheme = useSyncExternalStore(
    subscribe,
    () => resolve(readTheme()),
    () => undefined
  );

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore (private mode)
    }
    applyTheme(next);
    listeners.forEach((listener) => listener());
  }, []);

  return { theme, resolvedTheme, setTheme };
}
