import Image from "next/image";
import type { BlurLogoCloudItem } from "@caffeinebounce/ui/marketing";

function MediaLogo({
  alt,
  className,
  height,
  src,
  width,
}: {
  alt: string;
  className?: string;
  height: number;
  src: string;
  width: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className ?? "h-6 w-auto object-contain opacity-95"}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

export const mediaLogoItems: BlurLogoCloudItem[] = [
  {
    name: "Forbes",
    logo: (
      <MediaLogo
        alt="Forbes logo"
        className="h-5 w-auto object-contain opacity-95"
        height={231}
        src="/images/media-logos/forbes.svg"
        width={1000}
      />
    ),
  },
  {
    name: "Fast Company",
    logo: (
      <MediaLogo
        alt="Fast Company logo"
        className="h-[1.125rem] w-auto object-contain opacity-95"
        height={198}
        src="/images/media-logos/fast-company.svg"
        width={1000}
      />
    ),
  },
  {
    name: "Adweek",
    logo: (
      <MediaLogo
        alt="Adweek logo"
        className="h-5 w-auto object-contain opacity-95"
        height={392}
        src="/images/media-logos/adweek.svg"
        width={1000}
      />
    ),
  },
  {
    name: "The Breakfast Club",
    logo: (
      <MediaLogo
        alt="The Breakfast Club logo"
        className="h-9 w-auto object-contain opacity-90"
        height={480}
        src="/images/media-logos/breakfast-club.png"
        width={640}
      />
    ),
  },
];
