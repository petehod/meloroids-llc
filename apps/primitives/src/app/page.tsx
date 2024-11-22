import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Button } from "../components/Button";
import { Camera } from "react-feather";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Button
        as="a"
        href="yaya"
        disabled={true}
        icon={<Camera />}
        iconPosition="right"
      >
        Get started
      </Button>
    </main>
  );
}
