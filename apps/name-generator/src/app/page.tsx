"use client";
import { Button } from "@repo/ui/Button";
import { useRef } from "react";
import { Moon } from "react-feather";

export default function Page(): JSX.Element {
  const inputRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null); // Adjust the ref type
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Button ref={inputRef} size="large" textColor="text-white">
        Hello Yaya
      </Button>
    </main>
  );
}
