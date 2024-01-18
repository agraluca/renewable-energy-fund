import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { cn } from "../../utils/cn";
import Add from "../../assets/svgs/Add";

export type PayeeCard = {
  isActive: boolean;
  image: ImageSourcePropType;
  name: string;
  onPress: () => void;
  addNew?: never;
};

export type AddCard = {
  isActive?: never;
  image?: never;
  name?: never;
  onPress: () => void;
  addNew: true;
};

export type PayeeCardProps = PayeeCard | AddCard;

export default function PayeeCard({
  isActive,
  name,
  image,
  onPress,
  addNew,
}: PayeeCardProps) {
  return (
    <Pressable
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 15,

        elevation: 2,
      }}
      onPress={onPress}
      className={cn(
        "items-center justify-center p-4 rounded-[15px] space-y-3 bg-white w-[100px] h-[120px]",
        {
          "bg-primary-1": isActive,
        }
      )}
    >
      <View className="w-[60px] h-[60px] object-cover">
        {addNew ? <Add /> : <Image source={image} />}
      </View>
      {!addNew && (
        <Text
          className={cn(
            "font-poppinsMedium text-xs text-neutral-1 max-w-[82px]",
            {
              "text-white": isActive,
            }
          )}
        >
          {name}
        </Text>
      )}
    </Pressable>
  );
}
