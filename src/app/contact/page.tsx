import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-black pt-28 text-white">
      <section className="section-padding">
        <div className="container-width max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-[#FF4628]">Contact</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Let’s connect</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            For speaking inquiries, partnerships, advisory engagements, and
            media opportunities, reach out directly.
          </p>

          <div className="mt-12 card-surface p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.14em] text-white/60">Email</p>
            <a href="mailto:contact@keenanbeasley.com" className="mt-3 inline-block text-2xl text-[#FF4628] hover:underline">
              contact@keenanbeasley.com
            </a>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.14em] text-white/60">Social</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.12em] text-white/80">
                <Link href="https://instagram.com" className="hover:text-[#FF4628]">
                  Instagram
                </Link>
                <Link href="https://linkedin.com" className="hover:text-[#FF4628]">
                  LinkedIn
                </Link>
                <Link href="https://x.com" className="hover:text-[#FF4628]">
                  Twitter / X
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
