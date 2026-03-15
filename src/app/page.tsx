import Link from "next/link";
import { Section, Container, Card, CardContent, Button } from "@caffeinebounce/ui";
import { Timeline, QuoteBlock, LogoGrid } from "@caffeinebounce/ui/marketing";
import KeenanHero from "@/components/KeenanHero";

const platformLanes = [
  {
    title: "Factory Capital",
    description: "Strategic capital architecture for operators, athletes, and founders building long-term wealth.",
  },
  {
    title: "Factory Partners",
    description: "Private equity, venture, and strategic partnerships across media, consumer, and technology.",
  },
  {
    title: "Attention Factory",
    description: "Media, studio, and narrative systems that expand distribution and unlock leverage.",
  },
  {
    title: "Factory Club",
    description: "A private network where high-agency builders share access, insight, and aligned opportunities.",
  },
  {
    title: "Factory Cares",
    description: "Philanthropic work and public-private initiatives designed to broaden access and impact.",
  },
];

const ownershipFlywheel = [
  {
    title: "Culture",
    description: "Identify the signals, communities, and stories shaping demand before the market fully prices them in.",
  },
  {
    title: "Attention",
    description: "Build distribution systems that turn resonance into reach, trust, and recurring influence.",
  },
  {
    title: "Capital",
    description: "Use strategy, partnerships, and financial structure to capture value instead of renting it.",
  },
  {
    title: "Ownership",
    description: "Convert momentum into equity, infrastructure, and institutions that can compound over time.",
  },
];

const ventures = [
  {
    name: "Factory Holdings",
    tagline: "Platform parent and operating backbone.",
    status: "Platform",
  },
  {
    name: "Sunday II Sunday",
    tagline: "Premium textured hair care brand rooted in performance and community.",
    status: "Growth",
  },
  {
    name: "Supply Factory",
    tagline: "Commerce and distribution infrastructure for culturally-led brands.",
    status: "Active",
  },
  {
    name: "Factory Studios",
    tagline: "Original content and production arm for strategic storytelling.",
    status: "Media",
  },
];

const timelineItems = [
  {
    title: "West Point",
    subtitle: "United States Military Academy",
    description: "Foundation in discipline, leadership, and mission-led decision-making.",
  },
  {
    title: "Procter & Gamble",
    subtitle: "Brand Management",
    description: "Early training in brand systems, scale, and consumer understanding.",
  },
  {
    title: "Reckitt",
    subtitle: "Marketing Leadership",
    description: "Expanded experience across growth strategy and go-to-market execution.",
  },
  {
    title: "L'Oréal",
    subtitle: "Executive Marketing",
    description: "Built expertise at the intersection of culture, category creation, and global brands.",
  },
  {
    title: "Factory",
    subtitle: "Founder & Entrepreneur",
    description: "Now building the infrastructure for culture-led ownership and modern wealth creation.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <KeenanHero />

      <Section spacing="lg">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="site-kicker">
              The Factory Platform
            </p>
            <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
              Factory converts cultural leverage into durable enterprise value.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/72">
              The platform sits at the intersection of brand, media, community,
              and capital. Each lane reinforces the others so momentum becomes
              architecture instead of just visibility.
            </p>
            <div className="site-card-static p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                Core Thesis
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/84">
                Culture creates the signal. Media expands the attention. Capital
                captures the upside. Ownership turns that upside into something
                that lasts.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platformLanes.map((item) => (
              <Card key={item.title} className="site-card">
                <CardContent className="p-7">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-white/[0.02]">
        <Container className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="site-kicker">Ownership Flywheel</p>
              <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
                A repeatable system for turning influence into assets.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Each stage expands the next. The goal is not attention for its
              own sake, but a pipeline from relevance to real ownership.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {ownershipFlywheel.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="site-card-static h-full p-6">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/45">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="site-card-static p-8 md:p-10">
            <p className="site-kicker">Portfolio & Ventures</p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
              Building companies and platforms designed to compound.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72">
              From operating infrastructure to media systems and consumer
              ventures, the portfolio reflects Factory&apos;s view that
              ownership should sit closer to the people shaping demand.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ventures.slice(0, 2).map((venture) => (
                <div
                  key={venture.name}
                  className="rounded-xl border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#ff8d68]">
                    {venture.status}
                  </p>
                  <h3 className="mt-3 text-2xl">{venture.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {venture.tagline}
                  </p>
                </div>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-8 border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white hover:border-[#FF4628]/60 hover:bg-[#FF4628]/10 hover:text-white"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ventures.slice(2).map((venture) => (
              <Card key={venture.name} className="site-card">
                <CardContent className="flex h-full flex-col p-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#ff8d68]">
                    {venture.status}
                  </p>
                  <h3 className="mt-4 text-2xl">{venture.name}</h3>
                  <p className="mt-3 grow text-white/70">{venture.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#080808]">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="site-kicker">Experience & Perspective</p>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
                An operator&apos;s lens built across institutions and
                entrepreneurship.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/72">
                The work behind Factory draws on brand leadership at global
                companies, founder execution, and a constant focus on how
                cultural value gets created, distributed, and owned.
              </p>
            </div>

            <QuoteBlock
              quote="The next era of wealth will be created at the intersection of culture, media, technology, and capital."
              attribution="Keenan Beasley"
              accentClassName="bg-[#FF4628]"
              className="max-w-none border-white/10 bg-white/[0.04] px-8 py-10 text-left md:px-10"
            />
          </div>

          <div className="space-y-10">
            <div>
              <p className="site-kicker">Experience Timeline</p>
              <div className="mt-8">
                <Timeline items={timelineItems} dotClassName="bg-[#FF4628]" />
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl md:text-4xl">As Seen In</h2>
                <Link
                  href="/media"
                  className="text-sm uppercase tracking-[0.14em] text-white/65 hover:text-[#FF4628]"
                >
                  Media archive
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
                className="gap-4"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="site-card-static overflow-hidden p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="site-kicker">Work With Factory</p>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
                Speaking, partnerships, advisory, and platform-building.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/72">
                If you&apos;re building something ambitious at the intersection
                of culture, media, and ownership, let&apos;s talk.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-start">
              <Button
                asChild
                className="w-full bg-[#FF4628] px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white hover:bg-[#d9563f] sm:w-auto"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium uppercase tracking-[0.14em] text-white hover:border-[#FF4628]/60 hover:bg-[#FF4628]/10 hover:text-white sm:w-auto"
              >
                <Link href="/speaking">Speaking & Advisory</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
