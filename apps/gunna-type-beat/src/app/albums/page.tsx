import { Card } from "@repo/ui/Card";
import { YayaText } from "@repo/ui/YayaText";
import Image from "next/image";
import { ALBUM_DATA } from "../../data/albums.data";

export default function Data() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <YayaText type="h2">Gunna Albums</YayaText>
      <div className="flex flex-row gap-8">
        {ALBUM_DATA.map((album) => (
          <Card
            className="p-4 bg-white rounded-lg flex flex-col items-center justify-center gap-4 cursor-pointer"
            href={`albums/${album.id}`}
            key={album.title}
          >
            <Image
              alt={album.alt}
              height={200}
              src={album.source}
              width={200}
            />
            <YayaText textColor="text-dark" textSize="1.5" type="h2">
              {album.title}
            </YayaText>
          </Card>
        ))}
      </div>
      <YayaText type="p">Other albums coming soon....</YayaText>
    </div>
  );
}
