"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { AnishPrashunMark } from "./anishpras-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <AnishPrashunMarkMotion /> : <AnishPrashunMark />;
}

function AnishPrashunMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="256"
      viewBox="0 0 512 256"
      fill="currentColor"
      className="dark:text-[#64ffda]"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <rect
        x="174.15"
        y="256"
        width="209.997"
        height="55.7279"
        transform="rotate(-90 174.15 256)"
        fill="currentColor"
      />
      <rect
        y="255.617"
        width="209.273"
        height="55.7279"
        transform="rotate(-90 0 255.617)"
        fill="currentColor"
      />
      <rect x="55.7279" width="118.422" height="46.3441" fill="currentColor" />
      <rect
        x="55.7279"
        y="117.309"
        width="118.422"
        height="46.3441"
        fill="currentColor"
      />
      <rect
        x="286.648"
        y="0.743164"
        width="168.071"
        height="47.5439"
        fill="currentColor"
      />
      <rect
        width="255.38"
        height="56.9114"
        transform="matrix(-0.0164782 0.999864 -0.999934 -0.0115002 343.238 0.654785)"
        fill="currentColor"
      />
      <rect
        x="283.98"
        y="128.518"
        width="170.739"
        height="47.5439"
        fill="currentColor"
      />
      <rect
        width="80.0702"
        height="56.9129"
        transform="matrix(-0.00424694 -0.999991 0.999996 -0.00296377 455.087 128.416)"
        fill="currentColor"
      />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
