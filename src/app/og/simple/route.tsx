import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  const robotoCondensedMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex bottom-16 right-16">
          <svg
            width={160}
            height={80}
            viewBox="0 0 512 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Anish Prashun "AP" mark (same shapes as public/favicon.svg) */}
            <rect
              x="174.15"
              y="256"
              width="209.997"
              height="55.7279"
              transform="rotate(-90 174.15 256)"
              fill="white"
            />
            <rect
              y="255.617"
              width="209.273"
              height="55.7279"
              transform="rotate(-90 0 255.617)"
              fill="white"
            />
            <rect x="55.7279" width="118.422" height="46.3441" fill="white" />
            <rect
              x="55.7279"
              y="117.309"
              width="118.422"
              height="46.3441"
              fill="white"
            />
            <rect
              x="286.648"
              y="0.743164"
              width="168.071"
              height="47.5439"
              fill="white"
            />
            <rect
              width="255.38"
              height="56.9114"
              transform="matrix(-0.0164782 0.999864 -0.999934 -0.0115002 343.238 0.654785)"
              fill="white"
            />
            <rect
              x="283.98"
              y="128.518"
              width="170.739"
              height="47.5439"
              fill="white"
            />
            <rect
              width="80.0702"
              height="56.9129"
              transform="matrix(-0.00424694 -0.999991 0.999996 -0.00296377 455.087 128.416)"
              fill="white"
            />
          </svg>
        </div>

        <h1
          tw="text-center font-medium"
          style={{
            fontFamily: "RobotoCondensed",
            fontSize: 64,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}
