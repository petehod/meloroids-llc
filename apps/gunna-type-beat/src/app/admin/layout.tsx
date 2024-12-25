"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/admin/login");
  }, [router, user]);

  return children;
}
