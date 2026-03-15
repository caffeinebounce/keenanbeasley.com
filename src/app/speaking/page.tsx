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
      <Section spacing="lg">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Speaking & Advisory</p>
            <h1 className="text-5xl leading-tight md:text-7xl">Speaking</h1>
            <p className="text-lg text-white/75">
              Keenan delivers keynotes, fireside chats, and strategic advisory
              sessions for organizations navigating culture, growth, and capital.
            </p>
          </div>
          <div className="site-card-static overflow-hidden">
            <Image src="/images/speaking.jpg" alt="Keenan speaking at an event" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </Container>
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
            <Button asChild className="bg-[#FF4628] px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] hover:bg-[#D9563F]">
              <Link href="/contact">Contact for Speaking</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
