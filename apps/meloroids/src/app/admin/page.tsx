"use client";
import { Form } from "@repo/ui/Form";
import { Input } from "@repo/ui/Input";
import { Label } from "@repo/ui/Label";
import { Button } from "@repo/ui/Button";
import { useCallback, useState } from "react";
import { AuthService } from "@repo/firebase/authService";
import { useRouter } from "next/navigation";
import { useRedirectLoggedInUser } from "../../hooks/useRedirectLoggedInUser";
export default function Admin() {
  const router = useRouter();
  useRedirectLoggedInUser();

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const { email, password } = loginInfo;
      if (!email || !password) return;

      await AuthService.signIn(email, password);

      console.log("Successfully logged in!");

      router.push("/");
    },

    [loginInfo, router]
  );

  return (
    <Form
      onSubmit={handleSubmit}
      backgroundColor="bg-dark"
      title="Login"
      button={<Button type="submit">Submit</Button>}
    >
      <>
        <Label text="Email" htmlFor="email" />
        <Input
          placeholder="yayadean38@gmail.com"
          type="email"
          required
          name="email"
          id="email"
          value={loginInfo.email}
          onChange={handleChange} // Attach the generic handleChange
        />
      </>
      <>
        <Label text="Password" htmlFor="password" />
        <Input
          placeholder="helloWorld"
          type="password"
          required
          name="password"
          id="password"
          value={loginInfo.password}
          onChange={handleChange} // Attach the generic handleChange
        />
      </>
    </Form>
  );
}
