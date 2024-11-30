"use client";

import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { Form } from "@repo/ui/Form";
import { Header } from "@repo/ui/Header";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import Link from "next/link";
import { useRef } from "react";
import { YayaText } from "../../../../packages/ui/src/YayaText";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen ">
      <Header
        logo={<YayaText type="h2">Name Generator</YayaText>}
        navLinks={
          <>
            <Link href={"/hello"}>test</Link>
            <Link href={"/"}>test</Link>
            <Link href={"/"}>test</Link>
          </>
        }
      />
      <ContentContainer containerStyles="justify-center items-start ">
        <Form
          onSubmit={(e) => e.preventDefault()}
          title="Login"
          button={
            <Button type="submit" containerStyles="w-full">
              Submit
            </Button>
          }
        >
          <>
            <Label text="Username" htmlFor="username" />
            <Input placeholder="Username" id="username" />
          </>
          <>
            <Label text="Username" htmlFor="username" />
            <Input placeholder="Username" id="username" marginBottom="mb-8" />
          </>
        </Form>
      </ContentContainer>
    </main>
  );
}
