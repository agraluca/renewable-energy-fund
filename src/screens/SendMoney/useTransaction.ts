import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  SendMoneySchemaValidation,
  sendMoneySchema,
} from "../../schemas/sendMoneySchema";
import {
  bankOptions,
  branchOptions,
  cardOptions,
  payeeOptions,
  transactionOptions,
} from "./mocks";
import { useBalance } from "../../stores/balanceStore";
import toast from "react-native-root-toast";
import { router } from "expo-router";

export default function useTransaction() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SendMoneySchemaValidation>({
    resolver: zodResolver(sendMoneySchema()),
    defaultValues: {
      paymentMethod: cardOptions[0].value,
      transactionType: transactionOptions[0].id,
      payee: payeeOptions[0].id,
      bank: bankOptions[0].value,
      branch: branchOptions[0].value,
      payeeName: "",
      cardNumber: "",
      amount: "",
      reference: "",
      save: false,
    },
  });

  const { decrementTotal } = useBalance();

  const handleSendMoney = (form: SendMoneySchemaValidation) => {
    try {
      decrementTotal(Number(form.amount));
      toast.show("Money sent successfully", {
        duration: 5000,
      });
      router.replace("/dashboard");
    } catch (err) {
      toast.show("An error occurred", {
        duration: 5000,
      });
    }
  };

  return {
    control,
    errors,
    register,
    handleSubmit,
    handleSendMoney,
    reset,
    watch,
  };
}
