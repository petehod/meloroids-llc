import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@repo/ui/styles.css";
import { GA_ID } from "@repo/assets/googleAnalytics";
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { GoogleAnalytics } from "@next/third-parties/google";
import { AuthProvider } from "../context/AuthProvider";

export const metadata: Metadata = {
  title: "Meloroids",
  description: "Insider data on artists' songs"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={GA_ID} />
      )}
      <body
        className={`${plus_jakarta_sans.className} flex items-center justify-center min-h-screen home gradient-bg p-2`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
