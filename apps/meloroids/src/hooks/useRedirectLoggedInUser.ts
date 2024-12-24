import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

export const useRedirectLoggedInUser = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
};
