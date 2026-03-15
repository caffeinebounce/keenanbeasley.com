import Link from "next/link";

const divisions = [
  {
    title: "Factory Capital",
    description: "Wealth and investment advisory platform",
  },
  {
    title: "Factory Partners",
    description: "Private equity, venture and strategic investments",
  },
  {
    title: "Attention Factory",
    description: "Media, studios and cultural IP",
  },
  {
    title: "Factory Club",
    description: "Private community for founders, athletes and investors",
  },
  {
    title: "Factory Cares",
    description: "Philanthropic initiatives and public-private partnerships",
  },
];

const ventures = [
  ["Factory Holdings", "Platform parent and operating backbone"],
  ["Sunday II Sunday", "Premium textured hair care brand"],
  ["Supply Factory", "Creator commerce and distribution enablement"],
  ["Factory Studios", "Original content and production arm"],
  ["Factory Media Group", "Audience development and media network"],
  ["Venture Noire", "Investment and venture pipeline for emerging founders"],
];

const timeline = [
  ["West Point", "United States Military Academy"],
  ["Procter & Gamble", "Brand Management"],
  ["Reckitt Benckiser", "Marketing Leadership"],
  ["L'Oréal", "Executive Marketing"],
  ["Founder & Entrepreneur", "Factory Platform"],
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.85)), url('/images/hero-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-width text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/80">
            Founder of Factory
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl leading-tight md:text-7xl">
            KEENAN BEASLEY
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/75 md:text-xl">
            Building the infrastructure for the next generation of wealth
            creators.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/factory"
              className="rounded-full bg-[#FF4628] px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#D9563F]"
            >
              Explore Factory
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:border-[#FF4628] hover:text-[#FF4628]"
            >
              View Portfolio
            </Link>
            <Link
              href="/media"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:border-[#FF4628] hover:text-[#FF4628]"
            >
              Media
            </Link>
          </div>
          <div className="mt-16 text-sm uppercase tracking-[0.2em] text-white/55">
            ↓ Scroll
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width space-y-12">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
              The Factory Platform
            </p>
            <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
              Factory converts culture, attention, and influence into capital and
              ownership.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((item) => (
              <article key={item.title} className="card-surface p-7">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
            Platform Flywheel
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Culture",
              "Attention",
              "Capital",
              "Ownership",
            ].map((step, i) => (
              <div key={step} className="relative card-surface p-8 text-center">
                <p className="text-2xl">{step}</p>
                {i < 3 ? (
                  <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-3xl text-[#FF4628] md:block">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
                Portfolio & Ventures
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">Building enduring assets</h2>
            </div>
            <Link href="/portfolio" className="text-sm uppercase tracking-[0.14em] text-white/70 hover:text-[#FF4628]">
              View All →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map(([name, tagline]) => (
              <article key={name} className="card-surface p-7">
                <h3 className="text-2xl">{name}</h3>
                <p className="mt-3 text-white/70">{tagline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
            Experience Timeline
          </p>
          <div className="mt-12 space-y-8 border-l border-white/10 pl-8">
            {timeline.map(([title, subtitle]) => (
              <div key={title} className="relative">
                <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-[#FF4628]" />
                <h3 className="text-2xl">{title}</h3>
                <p className="text-white/70">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width space-y-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl">As Seen In</h2>
            <Link href="/media" className="text-sm uppercase tracking-[0.14em] text-white/70 hover:text-[#FF4628]">
              Visit Media →
            </Link>
          </div>
          <div className="grid gap-4 text-center text-white/60 md:grid-cols-4">
            {[
              "Forbes",
              "Fast Company",
              "Adweek",
              "The Breakfast Club",
            ].map((outlet) => (
              <div key={outlet} className="card-surface py-8 text-lg">
                {outlet}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-width max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-24 bg-[#FF4628]" />
          <blockquote className="text-3xl leading-relaxed md:text-5xl">
            “The next era of wealth will be created at the intersection of
            culture, media, technology, and capital.”
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-white/70">
            — Keenan Beasley
          </p>
        </div>
      </section>
    </div>
  );
}
