import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";

export const useRedirectLoggedInUser = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);
};
