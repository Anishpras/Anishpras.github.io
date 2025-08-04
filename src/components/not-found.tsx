import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        width="512"
        height="256"
        viewBox="0 0 512 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
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
        <rect
          x="55.7279"
          width="118.422"
          height="46.3441"
          fill="currentColor"
        />
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
      </svg>

      <h1 className="mt-8 mb-6 text-8xl font-medium">404</h1>

      <Button variant="link" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
