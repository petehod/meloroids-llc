import {
  DOWNLOAD_ICON,
  CHART_ICON,
  GUITAR_ICON,
  ABLETON_ICON,
  NOTION_ICON,
  DICE_ICON,
  YOUTUBE_ICON
} from "../constants/icon.constants";
import {
  ESP_LEAD_MAGNET_LINK,
  DEANS_LIST_LINK,
  GLG_LINK,
  GUNNA_TYPE_BEAT_LINK,
  GCC_LEAD_MAGNET_LINK,
  NAME_GENERATOR_LINK,
  LOOPS_BY_DEAN_LINK,
  LOOP_TUTORIALS_LINK
} from "../constants/links.constants";

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
    link: ESP_LEAD_MAGNET_LINK,
    active: true
  },
  {
    title: "All my loops (Dropbox link)",
    icon: "mdi:dropbox",
    iconType: "icon",
    link: DEANS_LIST_LINK,
    active: false
  },
  {
    title: "Guitar Loop God",
    icon: "/images/glg.png",
    iconType: "image",
    link: GLG_LINK,
    active: true
  },
  {
    title: "gunnatypebeat.com (Gunna's data)",
    icon: CHART_ICON,
    iconType: "icon",
    link: GUNNA_TYPE_BEAT_LINK,
    active: true
  },

  {
    title: "300 Guitar Chord Diagrams (FREE)",
    icon: GUITAR_ICON,
    iconType: "icon",
    link: GCC_LEAD_MAGNET_LINK,
    active: true
  },
  {
    title: "FREE Ableton Guitar Loop Template",
    icon: ABLETON_ICON,
    iconType: "icon",
    link: "/ableton-template",
    active: false
  },
  {
    title: "FREE Music Tracking Template",
    icon: NOTION_ICON,
    iconType: "icon",
    link: "/music-tracking-template",
    active: false
  },
  {
    title: "Loop/Beat Name Generator",
    link: NAME_GENERATOR_LINK,
    iconType: "icon",
    icon: DICE_ICON,
    active: false
  },
  {
    title: "Loops by dean",
    icon: YOUTUBE_ICON,
    iconType: "icon",
    link: LOOPS_BY_DEAN_LINK,
    active: false
  },
  {
    title: "Loop Tutorials by dean",
    icon: YOUTUBE_ICON,
    iconType: "icon",
    link: LOOP_TUTORIALS_LINK,
    active: false
  }
];
