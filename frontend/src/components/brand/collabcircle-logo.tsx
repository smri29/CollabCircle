import Image from "next/image";

type CollabCircleLogoProps = {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function CollabCircleLogo({
  width,
  height,
  priority = false,
  className,
}: CollabCircleLogoProps) {
  return (
    <Image
      alt="CollabCircle logo"
      className={className}
      height={height}
      priority={priority}
      src="/CollabCircle Logo.svg"
      width={width}
    />
  );
}
