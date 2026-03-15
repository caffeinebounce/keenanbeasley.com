import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="container-width flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <Image
            src="/images/logo-orange.png"
            alt="Keenan Beasley"
            width={120}
            height={40}
          />
          <p className="text-sm text-white/60">
            © 2025 Keenan Beasley. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-[0.12em] text-white/70">
          <Link href="https://instagram.com" className="transition hover:text-[#FF4628]">
            Instagram
          </Link>
          <Link href="https://linkedin.com" className="transition hover:text-[#FF4628]">
            LinkedIn
          </Link>
          <Link href="https://x.com" className="transition hover:text-[#FF4628]">
            Twitter/X
          </Link>
        </div>
      </div>
    </footer>
  );
}
