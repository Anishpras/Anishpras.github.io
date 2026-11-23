import { readFileSync } from "node:fs";
import { join } from "node:path";

import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const font = readFileSync(
  join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
);

const line = (style: React.CSSProperties) => (
  <div
    style={{
      position: "absolute",
      display: "flex",
      background: "#27272a",
      ...style,
    }}
  />
);

/** Anish Prashun "AP" mark (same shapes as public/favicon.svg). */
function Mark() {
  return (
    <svg width={120} height={60} viewBox="0 0 512 256" fill="none">
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
  );
}

export async function renderOgImage({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  const fontSize = title.length > 80 ? 52 : title.length > 50 ? 60 : 68;

  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        padding: "64px 112px",
        fontFamily: "RobotoCondensed",
        position: "relative",
      }}
    >
      {line({ top: 0, bottom: 0, left: 64, width: 1 })}
      {line({ top: 0, bottom: 0, right: 64, width: 1 })}
      {line({ left: 0, right: 0, top: 64, height: 1 })}
      {line({ left: 0, right: 0, bottom: 64, height: 1 })}

      {eyebrow && (
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#64ffda",
            letterSpacing: 2,
            marginBottom: 24,
          }}
        >
          {eyebrow.toUpperCase()}
        </div>
      )}
      <div style={{ display: "flex", fontSize, lineHeight: 1.15 }}>{title}</div>

      <div
        style={{
          position: "absolute",
          bottom: 88,
          left: 112,
          display: "flex",
          fontSize: 26,
          color: "#a1a1aa",
        }}
      >
        Anish Prashun · anishprashun.me
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 104,
          display: "flex",
        }}
      >
        <Mark />
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "RobotoCondensed", data: font, weight: 500, style: "normal" },
      ],
    }
  );

  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
    .render()
    .asPng();
}
