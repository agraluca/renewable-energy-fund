import { Text, View, ScrollView } from "react-native";

import { Link } from "expo-router";

import Base from "../../templates/Base";

import { SignInLock } from "../../assets/svgs/Login";
import Button from "../../components/Button";
import useSignIn from "./useSignIn";
import Input from "../../components/Input";

export default function SignIn() {
  const { control, errors, handleSubmit, handleSignIn } = useSignIn();
  return (
    <Base title="Log In">
      <ScrollView
        className="flex-1 bg-white rounded-t-[40px] p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="pb-[60px]">
          <Text className="font-poppinsSemiBold text-2xl text-primary-1">
            Welcome Back
          </Text>
          <Text className="font-poppinsMedium text-xs text-neutral-1 mb-[47px]">
            Log in to continue
          </Text>
          <View className="w-[150px] h-[150px] self-center mb-10">
            <SignInLock />
          </View>
          <View className="space-y-4">
            <View>
              <Input
                control={control}
                name="email"
                placeholder="Email"
                label="Email"
                keyboardType="email-address"
                error={errors?.email?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="password"
                placeholder="Password"
                label="Password"
                showPasswordVisibilityIcon
                error={errors?.password?.message}
              />
            </View>
          </View>
          <Link href="/sign-up" className="self-end mt-3">
            Forgot your password?
          </Link>
          <View className="mt-10">
            <Button
              onPress={handleSubmit((form) => {
                handleSignIn(form);
              })}
            >
              Log in
            </Button>
          </View>
          <View className="flex-row justify-center font-poppinsRegular text-xs text-neutral-1 mt-10">
            <Text className="font-poppinsMedium text-xs text-neutral-1 mr-[5px]">
              Dont have an account?
            </Text>

            <Link
              href="/sign-up"
              className="font-poppinsSemiBold text-xs text-primary-1"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </Base>
  );
}
