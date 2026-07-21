"use client";

import { useState } from "react";

const FALLBACK_IMAGE =
  "https://www.gstatic.com/hostedimg/5e903ed9436e1391_large";

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ProductImage({
  src,
  alt,
  priority = false,
  className = "h-full w-full object-cover",
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={`${className} absolute inset-0 h-full w-full`}
      onError={() => {
        if (currentSrc !== FALLBACK_IMAGE) {
          setCurrentSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}
