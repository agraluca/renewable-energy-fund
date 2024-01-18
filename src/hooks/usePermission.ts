import { useEffect } from "react";
import { useAuth } from "../stores/authStore";
import { router } from "expo-router";
import toast from "react-native-root-toast";

export default function usePermission() {
  const { email } = useAuth();
  const isLoggedIn = !!email;

  useEffect(() => {
    if (!isLoggedIn) {
      toast.show("Please log in", {
        duration: 5000,
      });
      router.replace("/");
    }
    return () => {};
  }, []);
}
