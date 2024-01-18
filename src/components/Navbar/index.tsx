import { Text, View } from "react-native";

import { styled } from "nativewind";
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
    <StyledView
      className={cn("w-full items-center py-1 h-[44px] mb-6", {
        "h-[166px]": showBalance,
      })}
    >
      <StyledText
        className={cn("text-white font-poppinsSemiBold ", {
          "mb-6": showBalance,
        })}
      >
        {title}
      </StyledText>
      {showBalance && (
        <StyledText className="text-white font-poppinsSemiBold text-2xl leading-[120%]">
          {formatCurrency(total)}
        </StyledText>
      )}
    </StyledView>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
