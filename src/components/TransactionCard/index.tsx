import { Pressable, Text } from "react-native";
import Bank from "../../assets/svgs/Bank";
import Person from "../../assets/svgs/Person";
import CreditCard from "../../assets/svgs/CreditCard";
import { cn } from "../../utils/cn";

export type TransactionCardProps = {
  isActive: boolean;
  icon: "bank" | "person" | "card";
  title: string;
  onPress: () => void;
};

export default function TransactionCard({
  isActive,
  title,
  icon,
  onPress,
}: TransactionCardProps) {
  const iconMapper = {
    bank: <Bank />,
    person: <Person />,
    card: <CreditCard />,
  };

  return (
    <Pressable
      onPress={onPress}
      className={cn("p-4 rounded-[15px] space-y-2 bg-neutral-3 w-[120px]", {
        "bg-orange-3": isActive,
      })}
    >
      {iconMapper[icon]}
      <Text className="font-poppinsMedium text-xs text-white max-w-[82px]">
        {title}
      </Text>
    </Pressable>
  );
}
