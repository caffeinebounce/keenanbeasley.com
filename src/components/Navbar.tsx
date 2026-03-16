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
          className="hidden md:inline-flex"
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
      LinkComponent={Link}
    />
  );
}
