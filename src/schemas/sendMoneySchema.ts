import { z } from "zod";

export const sendMoneySchema = () =>
  z.object({
    paymentMethod: z.string().min(1, "Payment method is required"),
    transactionType: z.string().min(1, "Payment method is required"),
    payee: z.string().min(1, "Payee is required"),
    bank: z.string().min(1, "Bank is required"),
    branch: z.string().min(1, "Branch is required"),
    payeeName: z.string().min(1, "Payee name is required"),
    cardNumber: z.string().min(1, "Card number is required"),
    amount: z
      .string()
      .min(1, "Amout is required")
      .refine((value) => (value ? /^\d+(\.\d{1,2})?$/.test(value) : true), {
        message: "Amount format is not correct",
      }),
    reference: z.string().min(1, "Reference is required"),
    save: z.boolean().optional(),
  });

export type SendMoneySchemaValidation = z.infer<
  ReturnType<typeof sendMoneySchema>
>;
