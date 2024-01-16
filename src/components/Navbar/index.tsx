import { Text, View } from "react-native";

import { styled } from "nativewind";

export type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <StyledView className="w-full items-center justify-center py-1 h-[44px] mb-6">
      <StyledText className="text-white font-poppinsSemiBold">
        {title}
      </StyledText>
    </StyledView>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
