import { SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router";

import { styled } from "nativewind";

export default function Page() {
  return (
    <SafeAreaView>
      <StyledView className="flex-1 bg-white items-center justify-center h-full">
        <StyledText className="text-base text-red-600 font-poppinsRegular">
          Sign Up
        </StyledText>

        <StyledLink href="/" className="text-text-default">
          Sign In
        </StyledLink>
      </StyledView>
    </SafeAreaView>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);
