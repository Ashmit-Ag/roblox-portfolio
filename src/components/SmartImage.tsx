"use client";

import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

interface SmartImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden w-full">
      {/* Mock / Skeleton */}
      {!loaded && (
        <div className="bg-[linear-gradient(110deg,#1f2937,45%,#374151,55%,#1f2937)] bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] sm:h-96 h-64 aspect-[16/9]" />
      )}

      {/* Real image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={clsx(
          "transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </div>
  );
};

export default SmartImage;
