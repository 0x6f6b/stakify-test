import "@/styles/globals.css";
import { cal, inter } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/component/navbar";
import { Footer } from "@/components/component/footer";

const title = "Stakify";
const description = "The non-custodial staking platform built for Solana";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(cal.variable, inter.variable)}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
