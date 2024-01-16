import {
  Text,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

import { styled } from "nativewind";

import Eye from "../../assets/svgs/Eye";

import { cn } from "../../utils/cn";

export type InputProps = {
  label: string;
  showPasswordVisibilityIcon?: boolean;
} & TextInputProps;

export default function Input({
  label,
  placeholder,
  showPasswordVisibilityIcon = false,
  ...rest
}: InputProps) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(
    showPasswordVisibilityIcon
  );

  const toggleShowPassword = () => {
    setIsPasswordSecure((prev) => !prev);
  };

  return (
    <StyledView>
      <StyledText className="text-xs font-poppinsSemiBold text-text-default mb-2">
        {label}
      </StyledText>
      <StyledView className="p-3 flex-row border-[2px] border-button-disabled rounded-[15px] bg-white items-center justify-between">
        <StyledInput
          {...rest}
          className={cn("text-neutral-1 font-poppinsMedium text-sm w-[100%]", {
            "w-[90%]": showPasswordVisibilityIcon,
          })}
          placeholderTextColor="#CBCBCB"
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={isPasswordSecure}
        />
        {showPasswordVisibilityIcon && (
          <StyledTouchableOpacity onPress={toggleShowPassword}>
            <Eye />
          </StyledTouchableOpacity>
        )}
      </StyledView>
    </StyledView>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
