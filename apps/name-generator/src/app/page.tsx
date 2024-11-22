import { Button } from "@repo/ui/Button";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Button as="button" iconPosition="right">
        Hello
      </Button>
    </main>
  );
}
