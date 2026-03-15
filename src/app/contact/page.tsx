import Link from "next/link";
import { Section, Container, Card, CardContent, SocialIcon } from "@caffeinebounce/ui";

export default function ContactPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <Section spacing="lg">
        <Container className="max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Contact</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Let&apos;s connect</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            For speaking inquiries, partnerships, advisory engagements, and
            media opportunities, reach out directly.
          </p>

          <Card className="mt-12 bg-white/5 border-white/10">
            <CardContent className="p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.14em] text-white/60">Email</p>
              <a href="mailto:contact@keenanbeasley.com" className="mt-3 inline-block text-2xl text-[#FF4628] hover:underline">
                contact@keenanbeasley.com
              </a>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60">Social</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
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
