import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & TouchableOpacityProps;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="bg-primary-1 rounded-[15px] border-none p-[10px] items-center"
    >
      <Text className="text-neutral-6 text-base font-poppinsMedium">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
