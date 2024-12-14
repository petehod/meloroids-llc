import { HomeInfo } from "../components/Home/HomeInfo";
import { HomeLinks } from "../components/Home/HomeLinks";
import { HomeSocials } from "../components/Home/HomeSocials";
import { ImageLink } from "../components/Links/ImageLink";
import { YOUTUBE_LINK } from "../constants/links.constants";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-start text-dark w-full max-w-28 rounded pt-8 pb-4 px-6  ">
      <ImageLink
        alt="Placeholder"
        src={"/images/pfp.jpeg"}
        link={YOUTUBE_LINK}
        fill
        className="object-cover rounded-full"
      />
      <HomeInfo title="dean" description="Writing Gunna type loops." />

      <HomeLinks />
      <HomeSocials />
    </main>
  );
}
