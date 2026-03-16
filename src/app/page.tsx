import Link from "next/link";
import { Section, Container, Card, CardContent } from "@caffeinebounce/ui";
import {
  BlurLogoCloud,
  CtaWithDashedGridLines,
  QuoteBlock,
  StackedIsometricFeatures,
} from "@caffeinebounce/ui/marketing";
import KeenanHero from "@/components/KeenanHero";
import { mediaLogoItems } from "@/lib/media-logos";

const platformLanes = [
  {
    title: "Factory Capital",
    description:
      "SEC-regulated RIA platform for advisory, capital strategy, and long-horizon ownership.",
  },
  {
    title: "Factory Partners",
    description:
      "SPV and fund infrastructure designed to operate inside regulated structures at scale.",
  },
  {
    title: "Factory Services",
    description:
      "Consulting and family office services for builders, operators, and aligned households.",
  },
  {
    title: "Factory Entertainment",
    description:
      "Media, studio, and brand deal capabilities built to turn cultural relevance into leverage.",
  },
  {
    title: "Factory Club",
    description:
      "Membership, community, and events platform with nonprofit structure under evaluation.",
  },
];

const ownershipFlywheel = [
  {
    title: "Culture",
    description: "Identify the signals, communities, and stories shaping demand before the market fully prices them in.",
    visualCaption: "Culture creates the signal.",
  },
  {
    title: "Attention",
    description: "Build distribution systems that turn resonance into reach, trust, and recurring influence.",
    visualCaption: "Media expands the attention.",
  },
  {
    title: "Capital",
    description: "Use strategy, partnerships, and financial structure to capture value instead of renting it.",
    visualCaption: "Capital captures the upside.",
  },
  {
    title: "Ownership",
    description: "Convert momentum into equity, infrastructure, and institutions that can compound over time.",
    visualCaption: "Ownership turns that upside into something that lasts.",
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
          <StackedIsometricFeatures
            activeItemClassName="border-[#FF4628]/45 bg-[#FF4628]/10 shadow-[0_24px_70px_rgba(255,70,40,0.16)]"
            autoplay={false}
            className="gap-12"
            description={
              <p className="max-w-md text-sm leading-relaxed text-white/60">
                Each stage builds on the the next. The goal is not attention for its
                own sake, but a pipeline from relevance to real ownership.
              </p>
            }
            eyebrow={
              <p className="site-kicker">
                BUILDING BLOCKS FOR CULTURAL OWNERSHIP
              </p>
            }
            featureItemClassName="rounded-box border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-sm"
            featureListClassName="lg:pr-4"
            heading={
              <h2 className="max-w-4xl text-4xl leading-tight md:text-5xl">
                A repeatable system for turning influence into assets.
              </h2>
            }
            items={ownershipFlywheel.map((item, index) => ({
              ...item,
              label: `0${index + 1}`,
            }))}
          />
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#080808]">
        <Container className="space-y-8">
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
        </Container>
      </Section>

      <Section spacing="md">
        <Container className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="site-kicker">As Seen In</p>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
                Conversations shaping culture, business, and ownership.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/68">
                Factory&apos;s point of view has shown up across business,
                media, and culture platforms where brand, capital, and
                long-horizon ownership intersect.
              </p>
            </div>

            <Link
              href="/media"
              className="text-sm uppercase tracking-[0.14em] text-white/65 hover:text-[#FF4628]"
            >
              Media archive
            </Link>
          </div>

          <BlurLogoCloud
            items={mediaLogoItems}
            columns={4}
            itemClassName="border-white/10 bg-white/[0.03]"
          />
        </Container>
      </Section>

      <CtaWithDashedGridLines
        className="[--background:rgba(255,255,255,0.03)]"
        eyebrow={<p className="site-kicker">Work With Keenan</p>}
        heading="Speaking, partnerships, advisory, and"
        highlightedHeading="platform-building."
        description="If you're building something ambitious at the intersection of culture, media, and ownership, let's talk."
        primaryAction={{ label: "Get in Touch", href: "/contact" }}
        quote="The future belongs to those who can align culture, technology, and capital into compounding ownership."
        quoteAuthor="Keenan Beasley"
        quoteRole="Founder, Factory"
      />
    </div>
  );
}
