import { Text, View } from "react-native";

import { useBalance } from "../../stores/balanceStore";
import { formatCurrency } from "../../utils/formatCurrency";
import { cn } from "../../utils/cn";

export type NavbarProps = {
  title: string;
  showBalance?: boolean;
};

export default function Navbar({ title, showBalance = false }: NavbarProps) {
  const { total } = useBalance();
  return (
    <View
      className={cn("w-full items-center py-1 h-[44px] mb-6", {
        "h-[186px]": showBalance,
      })}
    >
      <Text
        className={cn("text-white font-poppinsSemiBold mt-2", {
          "mb-6": showBalance,
        })}
      >
        {title}
      </Text>
      {showBalance && (
        <Text className="text-white font-poppinsSemiBold text-2xl leading-[120%]">
          {formatCurrency(total)}
        </Text>
      )}
    </View>
  );
}
