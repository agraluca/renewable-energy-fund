import { ScrollView, Text, View } from "react-native";

import { Link } from "expo-router";

import Base from "../../templates/Base";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import useSignUp from "./useSignUp";

export default function SignUp() {
  const { control, errors, handleSubmit, handleSignUp } = useSignUp();
  return (
    <Base title="Sign Up">
      <ScrollView
        className="flex-1 bg-white rounded-t-[40px] p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="pb-10">
          <Text className="font-poppinsSemiBold text-2xl text-primary-1">
            Create an account
          </Text>
          <Text className="font-poppinsMedium text-xs text-neutral-1 mb-8">
            Add your personal details bellow
          </Text>
          <View className="space-y-4">
            <View>
              <Input
                control={control}
                name="firstName"
                placeholder="John"
                label="First name"
                keyboardType="default"
                error={errors.firstName?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="lastName"
                placeholder="Doe"
                label="Last name"
                keyboardType="default"
                error={errors.lastName?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="email"
                placeholder="john@doe.com"
                label="Email"
                keyboardType="email-address"
                error={errors.email?.message}
              />
            </View>
            <View className="mb-2">
              <Input
                control={control}
                name="password"
                placeholder="Password (Min. 8 characters)"
                label="Password"
                showPasswordVisibilityIcon
                error={errors.password?.message}
              />
            </View>
            <View>
              <Checkbox
                control={control}
                name="agreedLicense"
                error={errors.agreedLicense?.message}
                message={
                  <Text className="ml-3 font-poppinsRegular text-sm text-neutral-1 max-w-[244px]">
                    By creating an account your agree to our{" "}
                    <Link
                      href="/"
                      className="font-poppinsSemiBold text-sm text-primary-1"
                    >
                      Term and Condtions
                    </Link>
                  </Text>
                }
              />
            </View>
          </View>

          <View className="mt-10">
            <Button
              onPress={handleSubmit((form) => {
                handleSignUp(form);
              })}
            >
              Sign up
            </Button>
          </View>
          <View className="flex-row self-center font-poppinsRegular text-xs text-neutral-1 mt-10">
            <Text className="font-poppinsMedium text-xs text-neutral-1 mr-[5px]">
              Already have an account?
            </Text>

            <Link
              href="/"
              className="font-poppinsSemiBold text-xs text-primary-1 "
            >
              Log in
            </Link>
          </View>
        </View>
      </ScrollView>
    </Base>
  );
}
