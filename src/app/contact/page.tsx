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
                href="mailto:info@keenanbeasley.com"
                className="mx-auto mt-3 block w-fit whitespace-nowrap text-[clamp(1.35rem,6vw,2rem)] leading-tight text-[#FF4628] hover:underline"
              >
                info@keenanbeasley.com
              </a>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/58">
                Best for speaking inquiries, advisory requests, strategic
                partnerships, and media opportunities.
              </p>

              <div className="mt-8">
                <p className="text-sm uppercase tracking-[0.14em] text-white/60">Social</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                  <a
                    href="https://instagram.com/keenanbeasley"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center text-white/72 transition-colors hover:text-[#FF4628]"
                  >
                    <SocialIcon platform="instagram" size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/keenanbeasley"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center text-white/72 transition-colors hover:text-[#FF4628]"
                  >
                    <SocialIcon platform="linkedin" size={24} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCBp9ngjP9cyPO6BsYT4GLtg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="inline-flex h-11 w-11 items-center justify-center text-white/72 transition-colors hover:text-[#FF4628]"
                  >
                    <SocialIcon platform="youtube" size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/keenanbeasley97"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-11 w-11 items-center justify-center text-white/72 transition-colors hover:text-[#FF4628]"
                  >
                    <SocialIcon platform="facebook" size={24} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
