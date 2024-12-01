import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";
import { TextContainer } from "@repo/ui/TextContainer";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <ContentContainer containerStyles="flex-row items-center justify-center gap-12">
        <TextContainer containerStyles="text-center flex flex-col flex-1 gap-4">
          <YayaText type="h2">
            All of Gunna's songs. Chords, tempos, chord progressions.
          </YayaText>
          <YayaText type="p" textSize="1.125">
            Use this data to get yourself a placement!
          </YayaText>
          <Button as="a" href="/gunna">
            Go to data
          </Button>
        </TextContainer>
        <Image
          src={"/gunna.jpg"}
          width={400}
          height={400}
          className="object-contain w-1/3 flex-1 rounded-lg"
          alt="gunna wearing a fancy jacket and sunglasses."
        />
      </ContentContainer>
    </main>
  );
}
