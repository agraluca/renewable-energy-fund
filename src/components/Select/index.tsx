import { SelectList } from "react-native-dropdown-select-list";

import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { Text, View } from "react-native";

type SelectProps<T extends FieldValues> = UseControllerProps<T> & {
  placeholder: string;
  data: { key: string; value: string }[];
  label: string;
  error?: string;
};

export default function Select<T extends FieldValues>({
  placeholder,
  data,
  label,
  error,
  ...controllerProps
}: SelectProps<T>) {
  const {
    field: { onChange },
  } = useController(controllerProps);

  return (
    <View>
      <Text className="mb-2 font-poppinsSemiBold text-text-default text-xs">
        {label}
      </Text>
      <SelectList
        placeholder={placeholder}
        defaultOption={data[0]}
        searchPlaceholder="Search..."
        setSelected={onChange}
        data={data}
        save="value"
        boxStyles={{
          borderColor: "#CBCBCB",
          borderRadius: 15,
          padding: 12,
        }}
        inputStyles={{
          color: "#343434",
          fontFamily: "Poppins_600SemiBold",
          fontSize: 14,
        }}
        dropdownStyles={{
          borderColor: "#CBCBCB",
          borderRadius: 15,
        }}
        {...controllerProps}
      />
      {!!error && (
        <Text className="text-xs font-poppinsSemiBold text-red-500 mt-2">
          {error}
        </Text>
      )}
    </View>
  );
}
