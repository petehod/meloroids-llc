"use client";
import { ContentContainer } from "@repo/ui/ContentContainer";
import { useAuth } from "../../context/AuthProvider";
import { LoginForm } from "../../components/Form/LoginForm";

export default function Admin() {
  const { user } = useAuth();

  if (!user) return <LoginForm />;

  return <ContentContainer>Hello</ContentContainer>;
}
