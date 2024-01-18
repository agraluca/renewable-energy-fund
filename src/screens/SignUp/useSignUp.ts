import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  SignUpSchemaValidation,
  signUpSchema,
} from "../../schemas/signUpSchema";
import { useAuth } from "../../stores/authStore";
import { router } from "expo-router";

import toast from "react-native-root-toast";

export default function useSignUp() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaValidation>({
    resolver: zodResolver(signUpSchema()),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreedLicense: false,
    },
  });

  const { signUp } = useAuth();

  const handleSignUp = async (form: SignUpSchemaValidation) => {
    try {
      signUp(form);
      toast.show("Account created successfuly", {
        duration: 5000,
      });
      router.replace("/");
    } catch {
      toast.show("An error ocurred", {
        duration: 5000,
      });
    }
  };

  return {
    control,
    errors,
    register,
    handleSubmit,
    handleSignUp,
    reset,
    watch,
  };
}
