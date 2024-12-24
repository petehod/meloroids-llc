"use client";
import { Button } from "@repo/ui/Button";
import { AuthService } from "@repo/firebase/authService";
import { FirestoreService } from "@repo/firebase/firestoreService";
import { UserSchema } from "@repo/common/user";
export default function Home() {
  const handleClick = async () => {
    const email = "yayadean38@gmail.com";
    const pw = "Poopbutt1!";
    const res = await AuthService.createUser(email, pw);

    const data = UserSchema.parse({
      id: res.user.uid,
      name: "dean",
      email,
      avatarURL: null,
      isAdmin: true
    });

    await FirestoreService.createDoc(data, "users");
  };

  return (
    <main className="w-full">
      <Button
        onClick={() => handleClick()}
        backgroundColor="bg-white"
        textColor="text-dark"
        maxWidth="w-64"
      >
        Hello world
      </Button>
    </main>
  );
}
