import { SONGS } from "./songs.data";

export const oneOfOneId = "ff17f389-743f-4091-bb9c-a036dae177c7";
export const aGiftAndACurseId = "b80de876-50ff-4388-a480-005ae5c203f9";
export const ds4everId = "ee32ab51-7924-4392-a92c-4be5cf937af2";

export type Album = {
  source: string;
  title: string;
  alt: string;
  id: string;
};

export const ALBUM_DATA: Album[] = [
  {
    source: "/albums/a-gift-and-a-curse.jpg",
    title: "A Gift & A Curse",
    alt: "Gunna with a skull with flowers on his head",
    id: aGiftAndACurseId
  },
  {
    source: "/albums/ds4ever.jpg",
    title: "DS4Ever",
    alt: "statue of Gunna wearing sunglasses",
    id: ds4everId
  },
  {
    source: "/albums/one-of-wun.jpg",
    title: "one of wun",
    alt: "Gunna in a doo rag",
    id: oneOfOneId
  }
];
