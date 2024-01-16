/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from "react-native";

import { styled, withExpoSnack } from "nativewind";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";

const StyledView = styled(View);
const StyledText = styled(Text);

function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <StyledView className="flex-1 bg-black items-center justify-center">
      <StyledText className="text-base text-red-600 font-poppinsRegular">
        CARALHOOOOOOOOOOOO
      </StyledText>
      <StyledText className="text-lg text-lime-600 font-poppinsMedium">
        CARALHOOOOOOOOOOOO
      </StyledText>
      <StyledText className="text-2xl text-text-1 font-poppinsSemiBold">
        CARALHOOOOOOOOOOOO
      </StyledText>
      <StatusBar style="light" />
    </StyledView>
  );
}

export default withExpoSnack(App);
