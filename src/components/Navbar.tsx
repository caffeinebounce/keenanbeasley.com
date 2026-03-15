"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Button,
  Navbar as SharedNavbar,
  type NavLink,
} from "@caffeinebounce/ui";

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Factory", href: "/factory" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Media", href: "/media" },
  { label: "Speaking", href: "/speaking" },
];

export default function Navbar() {
  return (
    <SharedNavbar
      logo={
        <Link href="/" aria-label="Keenan Beasley home" className="block">
          <Image
            src="/images/logo-orange.png"
            alt="Keenan Beasley"
            width={148}
            height={48}
            priority
          />
        </Link>
      }
      links={navLinks}
      rightContent={
        <Button
          asChild
          variant="outline"
          hoverEffect="slide"
          className="hidden border-white/[0.12] bg-white/[0.06] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/80 hover:border-[#FF4628]/70 hover:text-white md:inline-flex"
        >
          <Link href="/contact">
            Connect
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      }
      preset="keenan"
      sticky
      hideOnScrollDown
      variant="blur"
      showMobileMenu
      className="keenan-navbar"
      containerClassName="max-w-6xl px-6 md:px-8"
      LinkComponent={Link}
    />
  );
}
