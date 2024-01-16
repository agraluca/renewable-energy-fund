import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styled } from "nativewind";
import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <StyledButton
      {...rest}
      className="bg-primary-1 rounded-[15px] border-none p-[10px] items-center"
    >
      <StyledText className="text-neutral-6 text-base font-poppinsMedium">
        {children}
      </StyledText>
    </StyledButton>
  );
}

const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);
