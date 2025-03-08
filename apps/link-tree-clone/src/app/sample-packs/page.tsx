import { HomeLinks } from "../../components/Home/HomeLinks";
import { LinksContainer } from "../../components/Home/LinksContainer";
import { SAMPLE_PACK_LINK_BLOCKS } from "../../data/linkBlocks.data";

export default function SamplePacks() {
  return (
    <LinksContainer showHomeButton={true}>
      <HomeLinks links={SAMPLE_PACK_LINK_BLOCKS} />
    </LinksContainer>
  );
}
