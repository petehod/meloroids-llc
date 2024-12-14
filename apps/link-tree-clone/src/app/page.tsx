import Link from "next/link";
import { HomeInfo } from "../components/Home/HomeInfo";
import { HomeLinks } from "../components/Home/HomeLinks";
import { HomeSocials } from "../components/Home/HomeSocials";

import Image from "next/image";
import { LINKS } from "@repo/assets/links";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-start text-dark w-full max-w-28 rounded pt-8 pb-4 px-6  ">
      <Link href={LINKS.youtube} className="relative w-16 h-16 mb-2">
        <Image
          alt="Dean playing guitar in his studio"
          src={"/images/pfp.jpeg"}
          fill
          className="object-cover rounded-full"
        />
      </Link>

      <HomeInfo title="dean" description="Writing Gunna type loops." />

      <HomeLinks />
      <HomeSocials />
    </main>
  );
}
