import { LINKS } from "@repo/assets/links";
import Link from "next/link";
import { HomeInfo } from "./HomeInfo";
import { HomeSocials } from "./HomeSocials";
import Image from "next/image";
import { ReactNode } from "react";
import { Home } from "react-feather";
type LinksContainerProps = {
  children: ReactNode;
  showHomeButton?: boolean;
};

export const LinksContainer = ({
  children,
  showHomeButton = false
}: LinksContainerProps) => {
  return (
    <main className="bg-white flex flex-col items-start text-dark w-full max-w-28 rounded pt-8 pb-4 px-6  relative">
      {showHomeButton && (
        <Link
          className="absolute right-6 w-full flex items-end justify-end"
          href={"/"}
        >
          <Home />
        </Link>
      )}
      <Link href={LINKS.youtube} className="relative w-16 h-16 mb-2">
        <Image
          alt="Dean playing guitar in his studio"
          src={"/images/pfp.jpeg"}
          fill
          className="object-cover rounded-full"
        />
      </Link>

      <HomeInfo title="dean" description="Writing Gunna type loops." />

      {children}
      <HomeSocials />
    </main>
  );
};
