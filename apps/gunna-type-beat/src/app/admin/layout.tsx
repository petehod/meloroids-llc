"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { user, firestoreUser, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (loading) return undefined;
    else if (firestoreUser?.isAdmin) router.push("/admin");
    else router.push("/admin/login");
  }, [firestoreUser?.isAdmin, loading, router, user]);

  return children;
}
