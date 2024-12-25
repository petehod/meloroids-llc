"use client";
import { AuthService } from "@repo/firebase/authService";
import { Button } from "@repo/ui/Button";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { useRouter } from "next/navigation";
import { Input } from "@repo/ui/Input";
import { useState, useCallback } from "react";
import { useRedirectLoggedInUser } from "../../hooks/useRedirectLoggedInUser";

export const LoginForm = () => {
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

      router.push("/admin");
    },

    [loginInfo, router]
  );

  return (
    <Form
      backgroundColor="bg-dark"
      button={<Button type="submit">Submit</Button>}
      onSubmit={handleSubmit}
      title="Login"
    >
      <>
        <Label htmlFor="email" text="Email" />
        <Input
          id="email"
          name="email"
          onChange={handleChange} // Attach the generic handleChange
          placeholder="yayadean38@gmail.com"
          required
          type="email"
          value={loginInfo.email}
        />
      </>
      <>
        <Label htmlFor="password" text="Password" />
        <Input
          id="password"
          name="password"
          onChange={handleChange} // Attach the generic handleChange
          placeholder="helloWorld"
          required
          type="password"
          value={loginInfo.password}
        />
      </>
    </Form>
  );
};
