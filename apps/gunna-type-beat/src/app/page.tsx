"use client";
import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { YayaText } from "@repo/ui/YayaText";
import { TextContainer } from "@repo/ui/TextContainer";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col w-full items-center justify-start ">
      <ContentContainer containerStyles=" flex flex-col md:flex-row items-center w-full justify-between text-left gap-4 lg:gap-12">
        <TextContainer containerStyles=" flex flex-col basis-full gap-6 ">
          <YayaText type="h2">
            Gunna&apos;s songs, tempos, & chord progressions.
          </YayaText>
          <YayaText textSize="1.125" type="p">
            Use this data to get yourself a placement!
          </YayaText>
          <Button as="a" containerStyles="md:max-w-64" href="/albums">
            Go to albums
          </Button>
        </TextContainer>
        <div className="flex  relative h-80 md:basis-full w-full">
          <Image
            alt="gunna wearing a fancy jacket and sunglasses."
            className="rounded"
            fill
            objectFit="contain"
            src="/gunna.jpg"
          />
        </div>
      </ContentContainer>
    </main>
  );
}
