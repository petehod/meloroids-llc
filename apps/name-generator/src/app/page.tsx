"use client";

import { Form } from "@repo/ui/Form";
import { useRef } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Form title="Hello world">hello</Form>
    </main>
  );
}
