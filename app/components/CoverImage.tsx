"use client";

import { useState } from "react";
import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function CoverImage({
  src,
  alt,
  className,
  priority,
}: CoverImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-indigo-500 dark:border-zinc-600 dark:border-t-indigo-400" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={320}
        height={480}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
