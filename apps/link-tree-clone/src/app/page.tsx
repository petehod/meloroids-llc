import { HomeLinks } from "../components/Home/HomeLinks";
import { LinksContainer } from "../components/Home/LinksContainer";
import { HOME_LINKS } from "../data/linkBlocks.data";

export default function Home() {
  return (
    <LinksContainer>
      <HomeLinks links={HOME_LINKS} />
    </LinksContainer>
  );
}
