import { Card } from "@repo/ui/Card";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";
import Image from "next/image";
import { ALBUM_DATA } from "../../data/gunna.data";

export default function Data() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <YayaText type="h2">Gunna Albums</YayaText>
      <div className="flex flex-row gap-8">
        {ALBUM_DATA.map((album) => (
          <Card
            key={album.title}
            className={`px-4 py-6 bg-white rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer`}
            href={`gunna/albums/${album.id}`}
          >
            <Image
              src={album.source}
              height={200}
              width={200}
              alt={album.alt}
            />
            <YayaText type="h2" textSize="1.5" textColor="text-dark">
              {album.title}
            </YayaText>
          </Card>
        ))}
      </div>
    </div>
  );
}
