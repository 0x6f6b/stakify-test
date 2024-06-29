"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import dynamic from "next/dynamic";

export function Navbar() {
  return (
    <header className="flex h-24 items-center px-4 lg:px-6">
      <Link href="/" className="ml-20 flex items-center justify-center">
        <Image src="/logo.png" width="120" height="120" alt="Logo" />
        <span className="sr-only">Solana NFT Staking</span>
      </Link>
      <nav className="ml-auto mr-20 flex items-center gap-4 sm:gap-6">
        <Link
          href="https://app.stakify.me"
          className="text-md font-medium underline-offset-4 hover:underline"
        >
          Staking
        </Link>
        <Link
          href="https://discord.gg/bVShvrgsg8"
          target="_blank"
          className="text-md font-medium underline-offset-4 hover:underline"
        >
          Contact
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
