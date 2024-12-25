"use client";
import { ContentContainer } from "@repo/ui/ContentContainer";
import Link from "next/link";
import { useAuth } from "../../context/AuthProvider";
import { LoginForm } from "../../components/Form/LoginForm";

export default function Admin() {
  const { user } = useAuth();

  if (!user) return <LoginForm />;

  const LINKS = [
    {
      href: "/admin/artists",
      text: "Artists"
    },
    {
      href: "/admin/songs",
      text: "Songs"
    }
  ];

  return (
    <ContentContainer>
      {LINKS.map((link) => (
        <Link href={link.href} key={link.text}>
          {link.text}
        </Link>
      ))}
    </ContentContainer>
  );
}
