import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-black pt-28 text-white">
      <section className="section-padding">
        <div className="container-width grid items-center gap-10 lg:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Speaking & Advisory</p>
            <h1 className="text-5xl leading-tight md:text-7xl">Speaking</h1>
            <p className="text-lg text-white/75">
              Keenan delivers keynotes, fireside chats, and strategic advisory
              sessions for organizations navigating culture, growth, and capital.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image src="/images/speaking.jpg" alt="Keenan speaking at an event" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111111]">
        <div className="container-width">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Speaking Topics</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <article key={topic} className="card-surface p-6">
                <h2 className="text-2xl">{topic}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Past Engagements</p>
            <div className="space-y-3 text-lg text-white/75">
              {engagements.map((item) => (
                <p key={item} className="card-surface p-4">{item}</p>
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
            <Link href="/contact" className="inline-flex rounded-full bg-[#FF4628] px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#D9563F]">
              Contact for Speaking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
