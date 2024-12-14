import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@repo/ui/styles.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "dean's links",
  description: "All links to dean"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-ZKXP22XP2V" />
      )}{" "}
      <body
        className={`${plus_jakarta_sans.className} flex items-center justify-center min-h-screen home gradient-bg p-2`}
      >
        {children}
      </body>
    </html>
  );
}
