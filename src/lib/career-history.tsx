import Image from "next/image";
import type { TimelineItem } from "@caffeinebounce/ui/marketing";

function CareerHistoryLogo({
  alt,
  className,
  height,
  monochrome = false,
  src,
  width,
}: {
  alt: string;
  className?: string;
  height: number;
  monochrome?: boolean;
  src: string;
  width: number;
}) {
  return (
    <span className="inline-flex min-h-10 items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={
          className ??
          "h-5 w-auto object-contain opacity-95"
        }
        style={
          monochrome
            ? {
                filter: "brightness(0) invert(1)",
              }
            : undefined
        }
      />
    </span>
  );
}

const careerLogos = {
  factory: (
    <CareerHistoryLogo
      alt="Factory logo"
      className="h-4 w-auto object-contain opacity-95"
      height={60}
      src="/images/logo-orange.png"
      width={605}
    />
  ),
  loreal: (
    <CareerHistoryLogo
      alt="L'Oreal logo"
      className="h-4 w-auto object-contain opacity-95"
      height={145}
      monochrome
      src="/images/career-history/loreal.svg"
      width={800}
    />
  ),
  pg: (
    <CareerHistoryLogo
      alt="P&G logo"
      className="h-5 w-auto object-contain opacity-95"
      height={87}
      monochrome
      src="/images/career-history/pg.svg"
      width={200}
    />
  ),
  reckitt: (
    <CareerHistoryLogo
      alt="Reckitt logo"
      className="h-4 w-auto object-contain opacity-95"
      height={48}
      monochrome
      src="/images/career-history/reckitt.svg"
      width={93}
    />
  ),
  westPoint: (
    <CareerHistoryLogo
      alt="West Point wordmark"
      className="h-4 w-auto object-contain opacity-95"
      height={382}
      monochrome
      src="/images/career-history/west-point-wordmark.svg"
      width={880}
    />
  ),
} as const;

export const aboutTimelineItems: TimelineItem[] = [
  {
    title: "West Point",
    subtitle: "United States Military Academy",
    logo: careerLogos.westPoint,
  },
  {
    title: "Procter & Gamble",
    subtitle: "Brand Management",
    logo: careerLogos.pg,
  },
  {
    title: "Reckitt Benckiser",
    subtitle: "Marketing Leadership",
    logo: careerLogos.reckitt,
  },
  {
    title: "L'Oréal",
    subtitle: "Executive Marketing",
    logo: careerLogos.loreal,
  },
  {
    title: "Founder & Entrepreneur",
    subtitle: "Factory Platform",
    logo: careerLogos.factory,
  },
];

export const homeTimelineItems: TimelineItem[] = [
  {
    title: "West Point",
    subtitle: "United States Military Academy",
    description:
      "Foundation in discipline, leadership, and mission-led decision-making.",
    logo: careerLogos.westPoint,
  },
  {
    title: "Procter & Gamble",
    subtitle: "Brand Management",
    description:
      "Early training in brand systems, scale, and consumer understanding.",
    logo: careerLogos.pg,
  },
  {
    title: "Reckitt",
    subtitle: "Marketing Leadership",
    description:
      "Expanded experience across growth strategy and go-to-market execution.",
    logo: careerLogos.reckitt,
  },
  {
    title: "L'Oréal",
    subtitle: "Executive Marketing",
    description:
      "Built expertise at the intersection of culture, category creation, and global brands.",
    logo: careerLogos.loreal,
  },
  {
    title: "Factory",
    subtitle: "Founder & Entrepreneur",
    description:
      "Now building the infrastructure for culture-led ownership and modern wealth creation.",
    logo: careerLogos.factory,
  },
];
