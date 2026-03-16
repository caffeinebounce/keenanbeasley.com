import Image from "next/image";
import { Section, Container, Card, CardContent } from "@caffeinebounce/ui";

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

const platformFrames = [
  {
    title: "Cultural leverage",
    detail:
      "The people shaping demand should be able to own the infrastructure behind the value they create.",
  },
  {
    title: "Strategic capital",
    detail:
      "Factory helps convert visibility into capital structure, partnerships, and long-term positioning.",
  },
  {
    title: "Institutional ownership",
    detail:
      "The goal is not a moment of attention, but an institution that compounds across cycles.",
  },
];

const flywheelItems = [
  {
    title: "Culture",
    detail:
      "Read the market through communities, relevance, and the narratives shaping aspiration.",
  },
  {
    title: "Attention",
    detail:
      "Build trust, distribution, and strategic reach so value creators can control the conversation.",
  },
  {
    title: "Capital",
    detail:
      "Turn momentum into capital access, advisory infrastructure, and disciplined growth mechanisms.",
  },
  {
    title: "Ownership",
    detail:
      "Capture upside through equity, vehicles, and platforms that can outlast any one campaign or cycle.",
  },
];

export default function FactoryPage() {
  return (
    <div className="site-page">
      <Section spacing="lg">
        <Container className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="site-kicker">Factory Platform</p>
            <h1 className="text-5xl leading-tight md:text-7xl">
              The Infrastructure Behind Cultural Wealth
            </h1>
            <p className="text-xl leading-relaxed text-white/75">
              Factory is a multi-division platform architected to convert
              culture, attention, and influence into capital and ownership.
            </p>
            <div className="grid gap-4">
              {platformFrames.map((item) => (
                <div key={item.title} className="site-card-static p-5">
                  <p className="site-kicker">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/74">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="site-card-static relative overflow-hidden p-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/8 to-transparent" />
            <Image
              src="/images/hero-2.jpg"
              alt="Keenan Beasley in Factory denim"
              width={1600}
              height={1200}
              className="aspect-[5/6] h-full w-full object-cover object-left md:aspect-[4/5]"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
              <p className="site-kicker">Platform Flywheel</p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/82">
                Culture creates the signal. Attention expands the market.
                Capital captures the upside. Ownership turns it into something
                durable.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="site-card-static p-8 md:p-10">
            <p className="site-kicker">The Cultural Economy</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Culture now drives enterprise value
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              We are in a period where distribution is democratized, communities
              are global, and trust is built peer-to-peer. In this environment,
              the people who shape attention shape markets.
            </p>
          </div>
          <div className="site-card-static p-8 md:p-10">
            <p className="site-kicker">From Influence to Ownership</p>
            <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
              Visibility is the beginning, not the finish line
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Influence without infrastructure fades. Factory provides the
              capital strategies, operating systems, and strategic partnerships
              that turn moments of attention into owned assets and long-term
              financial leverage.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">The Platform Model</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {divisions.map((division) => (
              <Card key={division.title} className="site-card">
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
        <Container className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="site-kicker">Flywheel</p>
              <h2 className="text-4xl leading-tight md:text-5xl">
                A system for turning relevance into ownership.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Factory is designed so each stage reinforces the next, creating a
              platform that can scale with attention instead of being consumed by it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {flywheelItems.map((item, index) => (
              <div key={item.title} className="site-card-static h-full p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/45">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl">{item.title}</h3>
                <p className="mt-3 text-white/72">{item.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#0a0a0a]">
        <Container className="site-card-static max-w-5xl p-8 md:p-10">
          <p className="site-kicker">The Next Generation of Wealth</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            We are building platforms where ownership can compound across
            media, commerce, and capital markets.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/72">
            Factory is designed for founders, athletes, creators, and operators
            who want more than visibility. The ambition is to build systems that
            hold value, transfer value, and keep compounding long after the
            spotlight moves on.
          </p>
        </Container>
      </Section>
    </div>
  );
}
