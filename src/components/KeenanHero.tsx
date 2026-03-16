import { EditorialHero } from "@caffeinebounce/ui/marketing";

const heroSignals = [
  {
    title: (
      <p className="site-kicker">
        Platform Design
      </p>
    ),
    description: (
      <p className="mt-3 text-sm leading-relaxed text-white/75">
        Capital, media, and partnerships aligned around ownership.
      </p>
    ),
  },
  {
    title: (
      <p className="site-kicker">
        Operator Lens
      </p>
    ),
    description: (
      <p className="mt-3 text-sm leading-relaxed text-white/75">
        Built from brand leadership and founder execution.
      </p>
    ),
  },
  {
    title: (
      <p className="site-kicker">
        Long Horizon
      </p>
    ),
    description: (
      <p className="mt-3 text-sm leading-relaxed text-white/75">
        Focused on durable assets, not short-term visibility.
      </p>
    ),
  },
];

const platformThesis = {
  eyebrow: (
    <p className="site-kicker">
      Platform Thesis
    </p>
  ),
  content: (
    <p className="mt-3 max-w-md text-base leading-relaxed text-white/84">
      The next generation of wealth will be built by people who can convert
      cultural relevance into owned infrastructure.
    </p>
  ),
};

const heroActionBaseClassName = "h-12 justify-center px-6 text-center";

export default function KeenanHero() {
  return (
    <section
      className="keenan-hero relative overflow-hidden px-0 pb-20"
      style={{ paddingTop: "clamp(7rem, 12vw, 8rem)" }}
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_15%_20%,rgba(255,95,56,0.28),transparent_0,transparent_46%),radial-gradient(circle_at_80%_18%,rgba(255,191,118,0.16),transparent_0,transparent_32%)]" />

      <EditorialHero
        className="keenan-editorial-hero"
        contentClassName="gap-8 md:pl-2"
        containerClassName="keenan-editorial-hero-grid gap-8"
        eyebrow={
          <p className="site-kicker">
            Keenan Beasley
          </p>
        }
        heading={
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Building the infrastructure for culture-led ownership.
          </h1>
        }
        description={
          <p className="max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
            Factory is the platform behind Keenan Beasley&apos;s work across
            media, capital, partnerships, and institutional building. The
            thesis is simple: people who create cultural value should be able
            to own the systems that monetize it.
          </p>
        }
        actions={[
          {
            label: "Get in Touch",
            href: "/contact",
            className: heroActionBaseClassName,
          },
        ]}
        signals={heroSignals}
        media={{
          src: "/images/hero-1.webp",
          alt: "Keenan Beasley portrait",
          width: 1500,
          height: 625,
          focalPoint: { x: 0.7, y: 0.42 },
          pixelatedCanvas: true,
          pixelatedCanvasProps: {
            backgroundColor: "transparent",
            cellSize: 3,
            distortionRadius: 72,
            distortionStrength: 1.35,
            dotScale: 0.96,
            dropoutStrength: 0.08,
            fadeSpeed: 0.16,
            followSpeed: 0.16,
            interactive: true,
            jitterSpeed: 2.2,
            jitterStrength: 1,
            maxFps: 40,
            sampleAverage: true,
            shape: "square",
            tintStrength: 0,
          },
          badge: "Founder of Factory",
          callout: platformThesis,
        }}
        mediaClassName="site-card-static p-0 !shadow-none !backdrop-blur-none"
        signalCardClassName="site-card-static !shadow-none !backdrop-blur-none"
        mediaBadgeClassName="hidden md:block rounded-box border border-white/12 bg-black/45 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/80 shadow-none !backdrop-blur-none"
        mediaCalloutClassName="border-white/10 bg-black/48 !shadow-none !backdrop-blur-none"
      />
    </section>
  );
}
