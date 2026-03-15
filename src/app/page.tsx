import Link from "next/link";
import Image from "next/image";
import { Section, Container, Card, CardContent, Button } from "@caffeinebounce/ui";
import { StepFlow, Timeline, QuoteBlock, LogoGrid } from "@caffeinebounce/ui/marketing";

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

const timelineItems = [
  { title: "West Point", subtitle: "United States Military Academy" },
  { title: "Procter & Gamble", subtitle: "Brand Management" },
  { title: "Reckitt Benckiser", subtitle: "Marketing Leadership" },
  { title: "L'Oréal", subtitle: "Executive Marketing" },
  { title: "Founder & Entrepreneur", subtitle: "Factory Platform" },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-2.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90" />
        <Container className="relative z-10 text-center">
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
            <Button asChild className="rounded-full bg-[#FF4628] px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] hover:bg-[#D9563F]">
              <Link href="/factory">Explore Factory</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/25 bg-transparent px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white hover:border-[#FF4628] hover:text-[#FF4628]">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/25 bg-transparent px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white hover:border-[#FF4628] hover:text-[#FF4628]">
              <Link href="/media">Media</Link>
            </Button>
          </div>
          <div className="mt-16 text-sm uppercase tracking-[0.2em] text-white/55">
            ↓ Scroll
          </div>
        </Container>
      </section>

      {/* Factory Platform */}
      <Section spacing="lg">
        <Container className="space-y-12">
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
              <Card key={item.title} className="bg-white/[0.04] border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                <CardContent className="p-7">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Flywheel */}
      <Section spacing="lg" className="bg-[#111111]">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
            Platform Flywheel
          </p>
          <div className="mt-10">
            <StepFlow
              steps={["Culture", "Attention", "Capital", "Ownership"]}
              arrowClassName="text-[#FF4628]"
            />
          </div>
        </Container>
      </Section>

      {/* Portfolio & Ventures */}
      <Section spacing="lg">
        <Container>
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
              <Card key={name} className="bg-white/[0.04] border-white/10 hover:bg-white/[0.08] transition-colors duration-300">
                <CardContent className="p-7">
                  <h3 className="text-2xl">{name}</h3>
                  <p className="mt-3 text-white/70">{tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section spacing="lg" className="bg-[#111111]">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
            Experience Timeline
          </p>
          <div className="mt-12">
            <Timeline items={timelineItems} dotClassName="bg-[#FF4628]" />
          </div>
        </Container>
      </Section>

      {/* As Seen In */}
      <Section spacing="lg">
        <Container className="space-y-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl">As Seen In</h2>
            <Link href="/media" className="text-sm uppercase tracking-[0.14em] text-white/70 hover:text-[#FF4628]">
              Visit Media →
            </Link>
          </div>
          <LogoGrid
            items={[
              { name: "Forbes" },
              { name: "Fast Company" },
              { name: "Adweek" },
              { name: "The Breakfast Club" },
            ]}
            columns={4}
          />
        </Container>
      </Section>

      {/* Quote */}
      <Section spacing="lg" className="bg-[#0a0a0a]">
        <Container className="max-w-4xl">
          <QuoteBlock
            quote="The next era of wealth will be created at the intersection of culture, media, technology, and capital."
            attribution="— Keenan Beasley"
            accentClassName="bg-[#FF4628]"
          />
        </Container>
      </Section>
    </div>
  );
}
