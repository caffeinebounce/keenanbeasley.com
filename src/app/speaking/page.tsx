import Image from "next/image";
import Link from "next/link";
import { Section, Container, Card, CardContent, Button } from "@caffeinebounce/ui";

const topics = [
  "The Cultural Economy and the Future of Wealth",
  "From Influence to Ownership: The Founder Blueprint",
  "Building Brands That Compound",
  "Media Strategy for Modern Operators",
  "Capital Access and the New Infrastructure",
];

const engagements = [
  "Founder Leadership Summit",
  "Brand Innovators Conference",
  "Wealth & Culture Forum",
  "Private Investor Roundtables",
];

export default function SpeakingPage() {
  return (
    <div className="site-page">
      <Section spacing="lg" className="pt-6 md:pt-10">
        <section className="relative overflow-hidden border-y border-white/8 bg-[#090909]">
          <div className="absolute inset-0">
            <Image
              src="/images/speaking-about.jpg"
              alt="Keenan Beasley portrait"
              fill
              priority
              className="object-cover object-[70%_center] sm:object-[76%_center] md:object-[82%_center] lg:object-[84%_center] xl:object-[82%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.95)_28%,rgba(0,0,0,0.82)_46%,rgba(0,0,0,0.5)_68%,rgba(0,0,0,0.18)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.93)_34%,rgba(0,0,0,0.74)_54%,rgba(0,0,0,0.38)_75%,rgba(0,0,0,0.12)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.12)_34%,rgba(0,0,0,0.48)_100%)]" />
          </div>

          <Container className="relative z-10 flex min-h-[38rem] items-center py-16 sm:min-h-[41rem] sm:py-20 lg:min-h-[44rem] lg:py-24">
            <div className="max-w-[20rem] space-y-6 sm:max-w-[28rem] md:max-w-[36rem] md:space-y-7">
              <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">
                Speaking & Advisory
              </p>
              <h1 className="max-w-2xl text-5xl leading-[0.94] md:text-7xl">
                Speaking
              </h1>
              <p className="max-w-[20rem] text-lg leading-relaxed text-white/84 sm:max-w-[28rem] md:max-w-3xl md:text-[1.35rem] md:leading-relaxed">
                Keenan delivers keynotes, fireside chats, and strategic
                advisory sessions for organizations navigating culture, growth,
                capital, and the operating systems that turn visibility into
                durable ownership.
              </p>
              <p className="max-w-[18rem] text-base leading-relaxed text-white/66 sm:max-w-[24rem] md:max-w-2xl md:text-lg">
                Conversations center on founder infrastructure, cultural
                economics, brand strategy, and the long-term architectures
                behind modern influence.
              </p>
            </div>
          </Container>
        </section>
      </Section>

      <Section spacing="lg" className="bg-[#111111]">
        <Container>
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Speaking Topics</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <Card key={topic} className="site-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl">{topic}</h2>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Past Engagements</p>
            <div className="space-y-3 text-lg text-white/75">
              {engagements.map((item) => (
                <Card key={item} className="site-card">
                  <CardContent className="p-4">{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Advisory Services</p>
            <p className="text-lg leading-relaxed text-white/75">
              Advisory support for founders, athletes, talent, and executive
              teams focused on growth strategy, brand architecture, media
              leverage, and ownership expansion. Engagement formats include
              strategic intensives, retained advisory, and private workshops.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact for Speaking</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
