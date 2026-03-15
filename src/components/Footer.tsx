"use client";

import Image from "next/image";
import { Footer as SharedFooter, SocialIcon } from "@caffeinebounce/ui";

export default function Footer() {
  return (
    <SharedFooter
      variant="brand"
      logo={
        <Image
          src="/images/logo-orange.png"
          alt="Keenan Beasley"
          width={100}
          height={33}
        />
      }
      tagline="Founder. Builder. Operator."
      linkGroups={[
        {
          title: "Platform",
          links: [
            { label: "Factory", href: "/factory" },
            { label: "Portfolio", href: "/portfolio" },
          ],
        },
        {
          title: "Connect",
          links: [
            { label: "Speaking", href: "/speaking" },
            { label: "Contact", href: "/contact" },
            { label: "Media", href: "/media" },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} Keenan Beasley. All rights reserved.`}
      containerClassName="max-w-6xl px-6"
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
