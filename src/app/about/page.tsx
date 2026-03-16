import Image from "next/image";
import Link from "next/link";
import { Button, Section, Container } from "@caffeinebounce/ui";
import { Timeline } from "@caffeinebounce/ui/marketing";
import { aboutTimelineItems } from "@/lib/career-history";
import { AboutPortraitPixelated } from "@/components/AboutPortraitPixelated";

export default function AboutPage() {
  return (
    <div className="site-page">
      <Section spacing="lg">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 space-y-6 md:order-1">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">About</p>
            <h1 className="text-5xl leading-tight md:text-6xl">Keenan Beasley</h1>
            <p className="text-lg text-white/75">
              Founder, operator, and builder focused on converting cultural
              leverage into durable ownership. Keenan&apos;s work lives at the
              intersection of media, influence, and capital formation.
            </p>
            <p className="text-white/70">
              With leadership experience across Fortune 500 brand organizations
              and a track record of building ventures rooted in culture, he
              created Factory to architect the next era of founder-led wealth.
            </p>
            <div className="site-card-static p-5">
              <p className="site-kicker">Operating Focus</p>
              <p className="mt-3 text-base leading-relaxed text-white/74">
                Brand strategy, cultural economics, media leverage, and the
                systems required to turn visibility into durable ownership.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-4">
            <div className="site-card-static overflow-hidden p-0">
              <AboutPortraitPixelated />
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container className="max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Founder Letter</p>
          <h2 className="text-4xl md:text-5xl">Why Factory Exists</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              We are living through one of the most important economic shifts of
              our lifetime. Culture is no longer a byproduct of commerce; it is
              the engine of commerce. Attention has become the world&apos;s most
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
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Career Timeline</p>
          <div className="mt-12">
            <Timeline items={aboutTimelineItems} dotClassName="bg-[#FF4628]" />
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-[#0a0a0a]">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="site-card-static overflow-hidden">
            <Image
              src="/images/speaking.jpg"
              alt="Keenan speaking"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">In Conversation</p>
            <h2 className="text-4xl md:text-5xl">Speaking with purpose</h2>
            <p className="text-lg text-white/75">
              Keenan speaks on modern wealth architecture, cultural economics,
              brand strategy, and the operating frameworks required to convert
              momentum into multi-generational value.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/speaking">Explore Speaking</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
