import { z } from "zod";

export const signUpSchema = () =>
  z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z.string().min(8, "Password must have at least 8 characters"),
    agreedLicense: z.literal<boolean>(true, {
      errorMap: () => ({ message: "License agreement must be checked" }),
    }),
  });

export type SignUpSchemaValidation = z.infer<ReturnType<typeof signUpSchema>>;
