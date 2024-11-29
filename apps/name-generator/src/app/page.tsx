"use client";

import { Button } from "@repo/ui/Button";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { Form } from "@repo/ui/Form";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import { useRef } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen ">
      <ContentContainer containerStyles="justify-center items-center h-screen">
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
