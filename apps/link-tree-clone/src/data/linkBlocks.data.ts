import { LINKS } from "@repo/assets/links";
import {
  CHART_ICON,
  DICE_ICON,
  DOWNLOAD_ICON,
  GUITAR_ICON
} from "@repo/ui/icons";

type LinkBlock = {
  title: string;
  icon: string;
  link: string;
  iconType: "icon" | "image";
  active: boolean;
};
export const linkBlocks: LinkBlock[] = [
  {
    title: "All my guitar loops (FREE)",
    icon: DOWNLOAD_ICON,
    iconType: "icon",
    link: LINKS.expensiveSamplePackLM,
    active: true
  },
  {
    title: "All my loops (Dropbox link)",
    icon: "mdi:dropbox",
    iconType: "icon",
    link: LINKS.deansList,
    active: false
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
