"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer as SharedFooter, SocialIcon } from "@caffeinebounce/ui";

export default function Footer() {
  return (
    <SharedFooter
      variant="brand"
      logo={
        <Link href="/" aria-label="Keenan Beasley home" className="block">
          <Image
            src="/images/logo-orange.png"
            alt="Keenan Beasley"
            width={124}
            height={40}
          />
        </Link>
      }
      className="border-white/10 bg-black/70"
      tagline="Founder, builder, and operator focused on turning culture, attention, and influence into durable ownership."
      linkGroups={[
        {
          title: "Explore",
          links: [
            { label: "About", href: "/about" },
            { label: "Factory", href: "/factory" },
            { label: "Portfolio", href: "/portfolio" },
          ],
        },
        {
          title: "Presence",
          links: [
            { label: "Media", href: "/media" },
            { label: "Speaking", href: "/speaking" },
            { label: "Contact", href: "/contact" },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} Keenan Beasley. All rights reserved.`}
      containerClassName="max-w-6xl px-6 md:px-8"
      bottomContent={
        <a
          href="mailto:contact@keenanbeasley.com"
          className="text-sm text-white/55 hover:text-white"
        >
          contact@keenanbeasley.com
        </a>
      }
      socialLinks={[
        {
          icon: <SocialIcon platform="instagram" size={20} />,
          href: "https://instagram.com/keenanbeasley",
          label: "Instagram",
        },
        {
          icon: <SocialIcon platform="linkedin" size={20} />,
          href: "https://linkedin.com/in/keenanbeasley",
          label: "LinkedIn",
        },
        {
          icon: <SocialIcon platform="x" size={20} />,
          href: "https://x.com/keenanbeasley",
          label: "X",
        },
      ]}
    />
  );
}
