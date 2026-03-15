"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar as SharedNavbar, type NavLink } from "@caffeinebounce/ui";

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Factory", href: "/factory" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Media", href: "/media" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <SharedNavbar
      logo={
        <Image
          src="/images/logo-orange.png"
          alt="Keenan Beasley"
          width={120}
          height={40}
          priority
        />
      }
      links={navLinks}
      sticky
      hideOnScrollDown
      variant="blur"
      showMobileMenu
      containerClassName="max-w-6xl px-6"
      LinkComponent={Link}
    />
  );
}
