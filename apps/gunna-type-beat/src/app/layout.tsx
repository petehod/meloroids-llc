import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@repo/assets/googleAnalytics";
import { Footer } from "../components/Footer";
import { GunnaTypeBeatHeader } from "../components/GunnaTypeBeatHeader";
import { AuthProvider } from "../context/AuthProvider";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

const title = "Gunna Type Beat";

export const metadata: Metadata = {
  title,
  description: "Song data from Gunna's discography"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={GA_ID} />
      )}
      <body
        className={`${pjs.className} w-full h-full flex flex-col items-center justify-between min-h-screen`}
      >
        <AuthProvider>
          <GunnaTypeBeatHeader title={title} />
          <ContentContainer> {children}</ContentContainer>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
