import { Slot } from "expo-router";

import { withExpoSnack } from "nativewind";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <Slot />
    </>
  );
}

export default withExpoSnack(RootLayout);
