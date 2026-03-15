const divisions = [
  {
    title: "Factory Capital",
    detail:
      "A modern wealth and investment advisory platform designed to help high-growth builders structure, preserve, and compound capital.",
  },
  {
    title: "Factory Partners",
    detail:
      "Private equity, venture and strategic investments across consumer, media, technology, and culture-forward operating businesses.",
  },
  {
    title: "Attention Factory",
    detail:
      "A media and cultural IP engine producing narratives, formats, and franchises that grow audience and strategic value.",
  },
  {
    title: "Factory Club",
    detail:
      "A private membership network where founders, athletes, and investors collaborate, share deal flow, and build aligned opportunities.",
  },
  {
    title: "Factory Cares",
    detail:
      "Philanthropic and public-private initiatives focused on education, access, and pathways to economic mobility.",
  },
];

export default function FactoryPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <section className="section-padding">
        <div className="container-width max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Factory Platform</p>
          <h1 className="text-5xl leading-tight md:text-7xl">The Infrastructure Behind Cultural Wealth</h1>
          <p className="text-xl text-white/75">
            Factory is a multi-division platform architected to convert culture,
            attention, and influence into capital and ownership.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width max-w-5xl space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Cultural Economy</p>
          <h2 className="text-4xl md:text-5xl">Culture now drives enterprise value</h2>
          <p className="text-lg leading-relaxed text-white/75">
            We are in a period where distribution is democratized, communities
            are global, and trust is built peer-to-peer. In this environment,
            the people who shape attention shape markets. Factory exists to make
            sure those value creators can own what they build.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">From Influence to Ownership</p>
          <h2 className="text-4xl md:text-5xl">Visibility is the beginning, not the finish line</h2>
          <p className="text-lg leading-relaxed text-white/75">
            Influence without infrastructure fades. Factory provides the capital
            strategies, operating systems, and strategic partnerships that turn
            moments of attention into owned assets and long-term financial
            leverage.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Platform Model</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {divisions.map((division) => (
              <article key={division.title} className="card-surface p-8">
                <h3 className="text-3xl">{division.title}</h3>
                <p className="mt-4 text-white/75">{division.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Flywheel</p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Culture",
              "Attention",
              "Capital",
              "Ownership",
            ].map((step, i) => (
              <div key={step} className="relative card-surface p-10 text-center">
                <p className="text-3xl">{step}</p>
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

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-width max-w-5xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Next Generation of Wealth</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            We are building platforms where ownership can compound across media,
            commerce, and capital markets.
          </h2>
        </div>
      </section>
    </div>
  );
}
