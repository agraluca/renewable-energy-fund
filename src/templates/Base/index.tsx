import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import { styled } from "nativewind";
import { Platform, View, StatusBar } from "react-native";
import MultipleCards from "../../assets/svgs/MultipleCards";

export type BaseProps = {
  children: ReactNode;
  title: string;
  showBalance?: boolean;
};

export default function Base({
  children,
  title,
  showBalance = false,
}: BaseProps) {
  const statusHeight = StatusBar.currentHeight;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3629B7"
        hidden={false}
        animated
      />
      <StyledView
        className="flex-1 bg-primary-1"
        style={{
          marginTop: Platform.OS === "android" ? statusHeight : 0,
        }}
      >
        <Navbar title={title} showBalance={showBalance} />
        {showBalance && (
          <StyledView className="absolute items-center  top-[80px] z-10">
            <MultipleCards />
          </StyledView>
        )}
        {children}
      </StyledView>
    </>
  );
}

const StyledView = styled(View);
