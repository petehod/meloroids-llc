"use client";
import { ContentContainer } from "@repo/ui/ContentContainer";
import Link from "next/link";
import { Button } from "@repo/ui/Button";
import { useCallback } from "react";
import { useAuth } from "../../context/AuthProvider";
import { LoginForm } from "../../components/Form/LoginForm";
import { SeedService } from "../../services/seed.service";

export default function Admin() {
  const { user } = useAuth();

  const handleSeedDB = useCallback(() => {
    SeedService.seedProgressions();
    SeedService.seedSongs();
  }, []);

  const handleResetDB = useCallback(() => {
    SeedService.resetDB();
  }, []);

  if (!user) return <LoginForm />;

  const LINKS = [
    {
      href: "/admin/artists",
      text: "Artists"
    },
    {
      href: "/admin/songs",
      text: "Songs"
    },
    {
      href: "/admin/albums",
      text: "Albums"
    }
  ];

  return (
    <ContentContainer>
      {LINKS.map((link) => (
        <Link href={link.href} key={link.text}>
          {link.text}
        </Link>
      ))}

      <Button onClick={handleSeedDB}>Seed Songs and Progressions</Button>
      <Button backgroundColor="bg-red" onClick={handleResetDB}>
        Reset DB
      </Button>
    </ContentContainer>
  );
}
