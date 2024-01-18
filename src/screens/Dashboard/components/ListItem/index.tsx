import { styled } from "nativewind";
import { Text, View } from "react-native";
import { cn } from "../../../../utils/cn";
import { ReactNode } from "react";

export type ListItemProps = {
  id: string;
  image: ReactNode;
  text: string;
  value: number;
};

export default function ListItem({ image, text, value }: ListItemProps) {
  return (
    <StyledView className="flex-row justify-between items-center py-3">
      <StyledView className="flex-row items-center space-x-3">
        {image}
        <StyledText className="font-poppinsMedium text-base text-neutral-1">
          {text}
        </StyledText>
      </StyledView>
      <StyledText
        className={cn("font-poppinsSemiBold text-base text-neutral-1", {
          "text-green-6": value > 0,
        })}
      >
        ${value}
      </StyledText>
    </StyledView>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
