import { Text, TouchableOpacity, View } from "react-native";
import Check from "../../assets/svgs/Check";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { ReactNode } from "react";

export type CheckboxProps<T extends FieldValues> = UseControllerProps<T> & {
  error?: string;
  message?: ReactNode;
};

export default function Checkbox<T extends FieldValues>({
  message,
  error,
  ...controllerProps
}: CheckboxProps<T>) {
  const {
    field: { onChange, value },
  } = useController(controllerProps);
  return (
    <View className="flex-col">
      <View className="flex-row items-start mt-0">
        <TouchableOpacity
          {...controllerProps}
          className="w-6 h-6 border-2 border-primary-1 rounded items-center justify-center"
          onPress={() => onChange(!value)}
        >
          <View>{value && <Check />}</View>
        </TouchableOpacity>
        {message && <View>{message}</View>}
      </View>

      {!!error && (
        <Text className="text-xs font-poppinsSemiBold text-red-500 mt-2">
          {error}
        </Text>
      )}
    </View>
  );
}
