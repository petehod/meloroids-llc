import { LINKS, SAMPLE_PACK_LINKS } from "@repo/assets/links";
import { CHART_ICON, DICE_ICON, GUITAR_ICON } from "@repo/ui/icons";

export type LinkBlock = {
  title: string;
  icon: string;
  link: string;
  iconType: "icon" | "image";
  active: boolean;
};
export const HOME_LINKS: LinkBlock[] = [
  {
    title: "All my sample packs",
    icon: GUITAR_ICON,
    iconType: "icon",
    link: "/sample-packs",
    active: true
  },

  {
    title: "Guitar Loop God",
    icon: "/images/glg.png",
    iconType: "image",
    link: LINKS.guitarLoopGod,
    active: true
  },
  {
    title: "gunnatypebeat.com (Gunna's data)",
    icon: CHART_ICON,
    iconType: "icon",
    link: LINKS.gunnaTypeBeat,
    active: true
  },

  {
    title: "300 Guitar Chord Diagrams (FREE)",
    icon: GUITAR_ICON,
    iconType: "icon",
    link: LINKS.guitarChordCookbookLM,
    active: true
  },

  {
    title: "Loop/Beat Name Generator",
    link: LINKS.nameGenerator,
    iconType: "icon",
    icon: DICE_ICON,
    active: false
  }
];

const SHARED_SAMPLE_PACK_LINK_BLOCKS: Pick<
  LinkBlock,
  "icon" | "active" | "iconType"
> = { iconType: "icon", active: true, icon: GUITAR_ICON };

export const SAMPLE_PACK_LINK_BLOCKS: LinkBlock[] = [
  {
    title:
      "Farm Town Sample Pack (Shaboozey, Acoustic Guitar, Slide Guitar) (prod. yayadean)",
    link: SAMPLE_PACK_LINKS.farmTown,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Solar Sample Pack (Gunna, Travis Scott, Guitar, Flute) (prod @yayadean)",
    link: SAMPLE_PACK_LINKS.solar,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: "Obsidian Sample Pack (prod yayadean)",
    link: SAMPLE_PACK_LINKS.obsidian,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Eclipse Sample Pack (Travis Scott, Don Toliver, Gunna, Money Man) (prod yayadean) [DARK]",
    link: SAMPLE_PACK_LINKS.eclipse,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Cowboy Sample Pack (Morgan Wallen, NoCap, Post Malone, Kelsea Ballerini ) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.cowboy,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Solace Sample Pack (Polo G, Gunna, NoCap, Juice WRLD) (prod yayadean + milodrama)",
    link: SAMPLE_PACK_LINKS.solace,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: "Noir Starter Pack (Youngboy, Nocap, Polo G) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.noir,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: `*FREE* pop punk x emo guitar loopkit / sample pack - "last goodbye" | (prod. by yayadean)`,
    link: SAMPLE_PACK_LINKS.lastGoodbye,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: "Wun of One Sample Pack (Gunna/Polo G/NoCap) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.wunOfOne,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Second Chance Starter Pack (Juice WRLD, Polo G, Gunna, Lil Peep) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.secondChance,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: "Wunner Sample Pack (Gunna/Polo G/NoCap) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.wunner,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title: "Cordoba Sample Pack (Gunna, Teni, Nocap) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.cordoba,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  },
  {
    title:
      "Expensive Starter Pack (Polo G. Gunna, Juice WRLD, Lil Peep) (prod yayadean)",
    link: SAMPLE_PACK_LINKS.expensive,
    ...SHARED_SAMPLE_PACK_LINK_BLOCKS
  }
];
