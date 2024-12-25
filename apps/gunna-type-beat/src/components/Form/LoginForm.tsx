"use client";
import { AuthService } from "@repo/firebase/authService";
import { Button } from "@repo/ui/Button";
import { Form } from "@repo/ui/Form";
import { Label } from "@repo/ui/Label";
import { useRouter } from "next/navigation";
import { Input } from "@repo/ui/Input";
import { useState, useCallback } from "react";

export const LoginForm = () => {
  const router = useRouter();

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
      button={
        <Button maxWidth="100%" type="submit">
          Submit
        </Button>
      }
      onSubmit={handleSubmit}
      title="Login"
    >
      <>
        <Label htmlFor="email" text="Email" />
        <Input
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="yaya@gmail.com"
          required
          type="email"
          value={loginInfo.email}
        />
      </>
      <>
        <Label htmlFor="password" text="Password" />
        <Input
          autoComplete="current-password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="helloWorld"
          required
          type="password"
          value={loginInfo.password}
        />
      </>
    </Form>
  );
};
