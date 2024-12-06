import { Header } from "@repo/ui/Header";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gunna Type Beat",
  description: "Song data from Gunna's discography"
};

const NAV_LINKS = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/gunna",
    text: "Data"
  }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${pjs.className} w-full h-full flex flex-col items-center justify-center`}
      >
        <Header
          logo={
            <Link href="/">
              <YayaText type="h1">Gunna Type Beat</YayaText>
            </Link>
          }
          navLinks={NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        />
        <ContentContainer> {children}</ContentContainer>
      </body>
    </html>
  );
}
