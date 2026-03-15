import Image from "next/image";

const timeline = [
  ["West Point", "United States Military Academy"],
  ["Procter & Gamble", "Brand Management"],
  ["Reckitt Benckiser", "Marketing Leadership"],
  ["L'Oréal", "Executive Marketing"],
  ["Founder & Entrepreneur", "Factory Platform"],
];

export default function AboutPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <section className="section-padding">
        <div className="container-width grid items-center gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">About</p>
            <h1 className="text-5xl leading-tight md:text-6xl">Keenan Beasley</h1>
            <p className="text-lg text-white/75">
              Founder, operator, and builder focused on converting cultural
              leverage into durable ownership. Keenan’s work lives at the
              intersection of media, influence, and capital formation.
            </p>
            <p className="text-white/70">
              With leadership experience across Fortune 500 brand organizations
              and a track record of building ventures rooted in culture, he
              created Factory to architect the next era of founder-led wealth.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image src="/images/headshot.jpg" alt="Keenan Beasley" width={900} height={1200} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Founder Letter</p>
          <h2 className="text-4xl md:text-5xl">Why Factory Exists</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              We are living through one of the most important economic shifts of
              our lifetime. Culture is no longer a byproduct of commerce — it is
              the engine of commerce. Attention has become the world’s most
              valuable asset, and influence now sits upstream from nearly every
              purchasing, investing, and growth decision.
            </p>
            <p>
              Yet while culture creates outsized enterprise value, too few of the
              people driving that value actually own the infrastructure behind
              it. Factory was built to change that. Our mission is to convert
              influence into ownership and transform visibility into long-term
              wealth.
            </p>
            <p>
              Factory is not one company. It is a platform. Through our capital,
              media, partnerships, community, and philanthropic initiatives, we
              build systems that allow founders, creators, athletes, and
              operators to move from participation to possession.
            </p>
            <p>
              This is about access. It is about architecture. It is about giving
              the next generation of wealth creators the tools, network, and
              strategic leverage to build institutions — not just moments.
            </p>
            <p>
              The future belongs to those who can align culture, technology, and
              capital into compounding ownership. That is the work. That is why
              Factory exists.
            </p>
            <p className="text-white">— Keenan Beasley</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Career Timeline</p>
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

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-width grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image src="/images/speaking.jpg" alt="Keenan speaking" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">In Conversation</p>
            <h2 className="text-4xl md:text-5xl">Speaking with purpose</h2>
            <p className="text-lg text-white/75">
              Keenan speaks on modern wealth architecture, cultural economics,
              brand strategy, and the operating frameworks required to convert
              momentum into multi-generational value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
