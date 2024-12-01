import { Header } from "@repo/ui/Header";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { YayaText } from "../../../../packages/ui/src/YayaText";
import Link from "next/link";
import { ContentContainer } from "@repo/ui/ContentContainer";

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
            <Link href={"/"}>
              <YayaText type="h1">Gunna Type Beat</YayaText>
            </Link>
          }
          navLinks={
            <nav className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <Link href={link.href}>{link.text}</Link>
              ))}
            </nav>
          }
        />
        <ContentContainer> {children}</ContentContainer>
      </body>
    </html>
  );
}
