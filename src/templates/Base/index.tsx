import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import { styled } from "nativewind";
import { Platform, SafeAreaView, View, StatusBar } from "react-native";
import { cn } from "../../utils/cn";

export type BaseProps = {
  children: ReactNode;
  title: string;
};

export default function Base({ children, title }: BaseProps) {
  const marginTop = `mt-[${StatusBar.currentHeight}px]`;
  return (
    <StyledSafeAreaView
      className={cn("bg-primary-1", {
        [`${marginTop}`]: Platform.OS === "android",
      })}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3629B7"
        hidden={false}
        animated
      />
      <StyledView className="flex-1 bg-primary-1">
        <Navbar title={title} />
        {children}
      </StyledView>
    </StyledSafeAreaView>
  );
}

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
