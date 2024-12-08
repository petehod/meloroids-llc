import { Header } from "@repo/ui/Header";
import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const title = "Gunna Type Beat";

export const metadata: Metadata = {
  title,
  description: "Song data from Gunna's discography"
};

const NAV_LINKS = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/albums",
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
              <YayaText textSize="2" type="h1">
                {title}
              </YayaText>
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
