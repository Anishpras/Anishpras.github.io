import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";

/**
 * Collapsible with the Radix API, but no React state: every panel is rendered
 * into the HTML (so it's indexable and works without hydration) and toggled by
 * one delegated listener (`collapsibleScript`, loaded once in BaseLayout).
 *
 * State lives in `data-state="open|closed"` on the root, its triggers and its
 * contents, so existing `group-data-[state=open]` styles keep working.
 */
function Collapsible({
  defaultOpen = false,
  disabled = false,
  asChild,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  disabled?: boolean;
  asChild?: boolean;
}) {
  const Comp = asChild ? SlotPrimitive.Slot : "div";
  return (
    <Comp
      data-collapsible=""
      data-state={defaultOpen ? "open" : "closed"}
      data-disabled={disabled ? "" : undefined}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  asChild,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  return (
    <Comp
      data-collapsible-trigger=""
      {...(asChild ? {} : { type: "button" })}
      {...props}
    />
  );
}

function CollapsibleContent(props: React.ComponentProps<"div">) {
  return <div data-collapsible-content="" {...props} />;
}

/** Vanilla JS: sync data-state/aria-expanded for the clicked collapsible. */
export const collapsibleScript = `
(() => {
  const sync = (root) => {
    const state = root.dataset.state;
    const own = (el) => el.closest('[data-collapsible]') === root;
    root.querySelectorAll('[data-collapsible-trigger]').forEach((el) => {
      if (!own(el)) return;
      el.dataset.state = state;
      el.setAttribute('aria-expanded', String(state === 'open'));
    });
    root.querySelectorAll('[data-collapsible-content]').forEach((el) => {
      if (own(el)) el.dataset.state = state;
    });
  };
  document.querySelectorAll('[data-collapsible]').forEach(sync);
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-collapsible-trigger]');
    if (!trigger) return;
    const root = trigger.closest('[data-collapsible]');
    if (!root || root.hasAttribute('data-disabled')) return;
    root.dataset.state = root.dataset.state === 'open' ? 'closed' : 'open';
    sync(root);
  });
})();`;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
