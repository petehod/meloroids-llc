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
            All of Gunna&apos;s songs. Chords, tempos, chord progressions.
          </YayaText>
          <YayaText textSize="1.125" type="p">
            Use this data to get yourself a placement!
          </YayaText>
          <Button as="a" href="/gunna">
            Go to data
          </Button>
        </TextContainer>
        <Image
          alt="gunna wearing a fancy jacket and sunglasses."
          className="object-contain w-1/3 flex-1 rounded-lg"
          height={400}
          src="/gunna.jpg"
          width={400}
        />
      </ContentContainer>
    </main>
  );
}
