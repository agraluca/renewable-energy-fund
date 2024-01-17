import { styled } from "nativewind";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Check from "../../assets/svgs/Check";

type CheckboxProps = {
  value?: boolean;
  handleChange: (value: boolean) => void;
};

export default function Checkbox({ value, handleChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(value);
  return (
    <StyledButton
      className="w-6 h-6 border-2 border-primary-1 rounded items-center justify-center"
      onPress={() => {
        setIsChecked((prev) => {
          handleChange(!prev);
          return !prev;
        });
      }}
    >
      <StyledView>{(value ?? isChecked) && <Check />}</StyledView>
    </StyledButton>
  );
}

const StyledButton = styled(TouchableOpacity);
const StyledView = styled(View);
