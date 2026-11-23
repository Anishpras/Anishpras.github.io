import type React from "react";

type ImageProps = Omit<React.ComponentProps<"img">, "src" | "alt"> & {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

/** Drop-in for the old next/image (every usage was `unoptimized` already). */
export default function Image({
  priority,
  quality: _quality,
  unoptimized: _unoptimized,
  loading,
  decoding,
  ...props
}: ImageProps) {
  return (
    <img
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      fetchPriority={priority ? "high" : undefined}
      {...props}
    />
  );
}
