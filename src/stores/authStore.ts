import { create } from "zustand";
import { SignUpSchemaValidation } from "../schemas/signUpSchema";
import { SignInSchemaValidation } from "../schemas/signInSchema";

type AuthStore = {
  email: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  signUp: (form: SignUpSchemaValidation) => void;
  signIn: (form: SignInSchemaValidation) => boolean;
};

export const useAuth = create<AuthStore>((set, get) => ({
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  signUp: (form) =>
    set(() => ({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      password: form.password,
    })),
  signIn: (form) => {
    if (form.email === get().email && form.password === get().password)
      return true;
    return false;
  },
}));
