import {
  Text,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

import Eye from "../../assets/svgs/Eye";

import { cn } from "../../utils/cn";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string;
  showPasswordVisibilityIcon?: boolean;
  prefix?: string;
  error?: string;
} & TextInputProps;

export default function Input<T extends FieldValues>({
  label,
  placeholder,
  showPasswordVisibilityIcon = false,
  prefix,
  error,
  ...controllerProps
}: InputProps<T>) {
  const {
    field: { onChange, value },
  } = useController(controllerProps);

  const [isPasswordSecure, setIsPasswordSecure] = useState(
    showPasswordVisibilityIcon
  );

  const toggleShowPassword = () => {
    setIsPasswordSecure((prev) => !prev);
  };

  return (
    <View>
      <Text className="text-xs font-poppinsSemiBold text-text-default mb-2">
        {label}
      </Text>
      <View className="p-2 flex-row border-[2px] border-button-disabled rounded-[15px] bg-white items-center justify-between">
        {!!value && (prefix ? <Text>{prefix}</Text> : null)}
        <TextInput
          {...controllerProps}
          onChangeText={onChange}
          value={value.toString()}
          className={cn(
            "text-neutral-1 font-poppinsMedium text-sm leading-[150%] w-[100%]",
            {
              "w-[90%]": showPasswordVisibilityIcon,
            }
          )}
          placeholderTextColor="#CBCBCB"
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={isPasswordSecure}
        />
        {showPasswordVisibilityIcon && (
          <TouchableOpacity onPress={toggleShowPassword}>
            <Eye />
          </TouchableOpacity>
        )}
      </View>
      {!!error && (
        <Text className="text-xs font-poppinsSemiBold text-red-500 mt-2">
          {error}
        </Text>
      )}
    </View>
  );
}
