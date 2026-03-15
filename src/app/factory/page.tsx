import { Section, Container, Card, CardContent } from "@caffeinebounce/ui";
import { StepFlow } from "@caffeinebounce/ui/marketing";

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
      <Section spacing="lg">
        <Container className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Factory Platform</p>
          <h1 className="text-5xl leading-tight md:text-7xl">The Infrastructure Behind Cultural Wealth</h1>
          <p className="text-xl text-white/75">
            Factory is a multi-division platform architected to convert culture,
            attention, and influence into capital and ownership.
          </p>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="max-w-5xl space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Cultural Economy</p>
          <h2 className="text-4xl md:text-5xl">Culture now drives enterprise value</h2>
          <p className="text-lg leading-relaxed text-white/75">
            We are in a period where distribution is democratized, communities
            are global, and trust is built peer-to-peer. In this environment,
            the people who shape attention shape markets. Factory exists to make
            sure those value creators can own what they build.
          </p>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">From Influence to Ownership</p>
          <h2 className="text-4xl md:text-5xl">Visibility is the beginning, not the finish line</h2>
          <p className="text-lg leading-relaxed text-white/75">
            Influence without infrastructure fades. Factory provides the capital
            strategies, operating systems, and strategic partnerships that turn
            moments of attention into owned assets and long-term financial
            leverage.
          </p>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Platform Model</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {divisions.map((division) => (
              <Card key={division.title} className="bg-white/[0.04] border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                <CardContent className="p-8">
                  <h3 className="text-3xl">{division.title}</h3>
                  <p className="mt-4 text-white/75">{division.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Flywheel</p>
          <div className="mt-10">
            <StepFlow
              steps={["Culture", "Attention", "Capital", "Ownership"]}
              arrowClassName="text-[#FF4628]"
            />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#0a0a0a]">
        <Container className="max-w-5xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Next Generation of Wealth</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            We are building platforms where ownership can compound across media,
            commerce, and capital markets.
          </h2>
        </Container>
      </Section>
    </div>
  );
}
