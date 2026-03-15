import Link from "next/link";
import { Section, Container, Card, CardContent, SocialIcon } from "@caffeinebounce/ui";

export default function ContactPage() {
  return (
    <div className="site-page">
      <Section spacing="lg">
        <Container className="max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Contact</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Let&apos;s connect</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            For speaking inquiries, partnerships, advisory engagements, and
            media opportunities, reach out directly.
          </p>

          <Card className="site-card mt-12">
            <CardContent className="p-6 md:p-10">
              <p className="text-sm uppercase tracking-[0.14em] text-white/60">Email</p>
              <a
                href="mailto:contact@keenanbeasley.com"
                className="mx-auto mt-3 block max-w-[15ch] break-all text-[clamp(1.35rem,6vw,2rem)] leading-tight text-[#FF4628] hover:underline"
              >
                contact@keenanbeasley.com
              </a>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/58">
                Best for speaking inquiries, advisory requests, strategic
                partnerships, and media opportunities.
              </p>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60">Social</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <Link href="https://instagram.com/keenanbeasley" className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-white/80 hover:text-[#FF4628]">
                    <SocialIcon platform="instagram" size={18} />
                    Instagram
                  </Link>
                  <Link href="https://linkedin.com/in/keenanbeasley" className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-white/80 hover:text-[#FF4628]">
                    <SocialIcon platform="linkedin" size={18} />
                    LinkedIn
                  </Link>
                  <Link href="https://x.com/keenanbeasley" className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-white/80 hover:text-[#FF4628]">
                    <SocialIcon platform="x" size={18} />
                    Twitter / X
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
