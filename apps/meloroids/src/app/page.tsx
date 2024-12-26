import { UserSchema } from "@repo/common/user";
export default function Home() {
  UserSchema.parse({ id: "asd" });
  return <main>hello world</main>;
}
