import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  SignInSchemaValidation,
  signInSchema,
} from "../../schemas/signInSchema";
import { useAuth } from "../../stores/authStore";
import toast from "react-native-root-toast";
import { router } from "expo-router";

export default function useSignIn() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignInSchemaValidation>({
    resolver: zodResolver(signInSchema()),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signIn } = useAuth();

  const handleSignIn = async (form: SignInSchemaValidation) => {
    try {
      const success = signIn(form);
      if (success) {
        toast.show("Logged in succesfully", {
          duration: 5000,
        });
        router.replace("/dashboard");
      } else {
        throw new Error("Your credentials doesn't match");
      }
    } catch (err) {
      toast.show(err.message, {
        duration: 5000,
      });
    }
  };

  return {
    control,
    errors,
    register,
    handleSubmit,
    handleSignIn,
    reset,
    watch,
  };
}
