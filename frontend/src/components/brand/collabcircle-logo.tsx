import type { CSSProperties } from "react";
import Image from "next/image";

type CollabCircleLogoProps = {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  variant?: "mark" | "lockup";
  style?: CSSProperties;
};

export function CollabCircleLogo({
  width,
  height,
  priority = false,
  className,
  variant = "lockup",
  style,
}: CollabCircleLogoProps) {
  return (
    <Image
      alt="CollabCircle logo"
      className={className}
      height={height}
      priority={priority}
      src="/New%20Logo/CollabCircle.svg"
      style={{
        ...(variant === "mark"
          ? {
              objectFit: "cover",
              objectPosition: "center 22%",
            }
          : {
              objectFit: "contain",
            }),
        ...style,
      }}
      width={width}
    />
  );
}
