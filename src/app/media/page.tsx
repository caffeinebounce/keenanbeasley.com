import { Section, Container, Card, CardContent } from "@caffeinebounce/ui";

const mediaAppearances = [
  {
    title: "Founder Interview",
    type: "Interview",
    outlet: "Business & Culture Journal",
  },
  {
    title: "Building Influence Into Equity",
    type: "Podcast",
    outlet: "Capital Conversations",
  },
  {
    title: "The Cultural Economy Thesis",
    type: "Press",
    outlet: "Future of Business",
  },
  {
    title: "Factory Platform Spotlight",
    type: "Feature",
    outlet: "Founders Weekly",
  },
  {
    title: "Media Ownership in the Creator Era",
    type: "Panel",
    outlet: "Scale Summit",
  },
  {
    title: "Operator Playbook",
    type: "Video",
    outlet: "Leadership Network",
  },
];

const articles = [
  "The Ownership Era: Why Attention Must Convert to Assets",
  "Culture as an Economic Engine",
  "From Audience to Institution: The Founder Infrastructure Model",
];

export default function MediaPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <Section spacing="lg">
        <Container className="max-w-5xl space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Media & Writing</p>
          <h1 className="text-5xl md:text-7xl">Media</h1>
          <p className="text-lg text-white/75">
            A curated archive of interviews, features, podcasts, and writing on
            wealth architecture, founder strategy, and cultural economics.
          </p>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaAppearances.map((item) => (
            <Card key={item.title} className="bg-white/[0.04] border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
              <CardContent className="p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-[#FF4628]">{item.type}</p>
                <h2 className="mt-3 text-2xl">{item.title}</h2>
                <p className="mt-3 text-white/70">{item.outlet}</p>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Articles & Essays</p>
          <div className="space-y-4">
            {articles.map((title) => (
              <Card key={title} className="bg-white/[0.04] border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl">{title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
