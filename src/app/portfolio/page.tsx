import { Section, Container, Card, CardContent } from "@caffeinebounce/ui";

const companies = [
  {
    name: "Factory Holdings",
    description:
      "Core holding structure and strategic operating platform for Factory's ecosystem.",
    status: "Active",
  },
  {
    name: "Sunday II Sunday",
    description:
      "Premium textured-hair care company rooted in wellness, performance, and community.",
    status: "Growth",
  },
  {
    name: "Supply Factory",
    description:
      "Commerce infrastructure and brand acceleration for culturally-led products.",
    status: "Active",
  },
  {
    name: "Factory Studios",
    description:
      "Content production and storytelling arm creating original IP and branded experiences.",
    status: "Active",
  },
  {
    name: "Factory Media Group",
    description:
      "Media network focused on audience scale, narrative control, and strategic distribution.",
    status: "Building",
  },
  {
    name: "Venture Noire",
    description:
      "Venture pipeline supporting founders building in culture, technology, and consumer.",
    status: "Pipeline",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <Section spacing="lg">
        <Container className="max-w-5xl space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Portfolio</p>
          <h1 className="text-5xl md:text-7xl">Portfolio & Ventures</h1>
          <p className="text-lg text-white/75">
            A focused portfolio of companies and initiatives designed to create
            enduring value across culture, commerce, and capital.
          </p>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <Card key={company.name} className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <p className="mb-4 inline-flex rounded-full border border-[#FF4628]/40 bg-[#FF4628]/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#FF4628]">
                  {company.status}
                </p>
                <h2 className="text-3xl">{company.name}</h2>
                <p className="mt-4 text-white/75">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
    </div>
  );
}
