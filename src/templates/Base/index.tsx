import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import { View, StatusBar, SafeAreaView } from "react-native";
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
  const statusHeight = StatusBar.currentHeight || 0;

  return (
    <>
      <SafeAreaView
        className="flex-1 bg-primary-1"
        style={{
          marginTop: statusHeight,
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="#3629B7"
          hidden={false}
          animated
        />
        <Navbar title={title} showBalance={showBalance} />
        {showBalance && (
          <View
            pointerEvents="none"
            className="absolute top-[110px] left-8 z-10"
            style={{ marginTop: statusHeight ? 0 : 50 }}
          >
            <MultipleCards />
          </View>
        )}
        {children}
      </SafeAreaView>
    </>
  );
}
