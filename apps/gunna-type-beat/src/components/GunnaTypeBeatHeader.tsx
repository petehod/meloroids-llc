"use client";
import { Header } from "@repo/ui/Header";
import { YayaText } from "@repo/ui/YayaText";
import Link from "next/link";
import { AuthService } from "@repo/firebase/authService";
import { useAuth } from "../context/AuthProvider";
import { Footer } from "./Footer";

interface GunnaTypeBeatHeaderProps {
  title: string;
}
const NAV_LINKS = [
  {
    href: "/",
    text: "Home"
  },
  {
    href: "/albums",
    text: "Albums"
  },
  {
    href: "/admin",
    text: "Admin",
    authRoute: true
  },
  {
    // href: "/admin",
    text: "Logout",
    authRoute: true,
    action: () => AuthService.logout()
  }
];

export const GunnaTypeBeatHeader = ({ title }: GunnaTypeBeatHeaderProps) => {
  const { user } = useAuth();

  const filteredNavLinks = user
    ? NAV_LINKS
    : NAV_LINKS.filter((link) => !link.authRoute);

  return (
    <Header
      logo={
        <Link href="/">
          <YayaText textSize="2" type="h1">
            {title}
          </YayaText>
        </Link>
      }
      mobileFooter={<Footer />}
      navLinks={filteredNavLinks.map((link) => {
        if (!link.href)
          return (
            <button key={link.text} onClick={link.action} type="button">
              <p>{link.text}</p>
            </button>
          );
        return (
          <Link
            className="w-full h-full px-4 flex items-center justify-center flex-1"
            href={link.href}
            key={link.text}
          >
            {link.text}
          </Link>
        );
      })}
    />
  );
};
