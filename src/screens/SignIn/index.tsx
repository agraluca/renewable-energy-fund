import { Text, View } from "react-native";

import { Link } from "expo-router";

import { styled } from "nativewind";

import Base from "../../templates/Base";

import { SignInLock } from "../../assets/svgs/Login";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);

export default function SignIn() {
  return (
    <Base title="Log In">
      <StyledView className="flex-1 bg-white rounded-t-[40px] p-6">
        <StyledText className="font-poppinsSemiBold text-2xl text-primary-1">
          Welcome Back
        </StyledText>
        <StyledText className="font-poppinsMedium text-xs text-neutral-1 mb-[47px]">
          Log in to continue
        </StyledText>
        <StyledView className="w-[150px] h-[150px] self-center mb-10">
          <SignInLock />
        </StyledView>
        <StyledView className="space-y-4">
          <StyledView>
            <Input
              placeholder="Email"
              label="Email"
              keyboardType="email-address"
            />
          </StyledView>
          <StyledView>
            <Input
              placeholder="Password"
              label="Password"
              showPasswordVisibilityIcon
            />
          </StyledView>
        </StyledView>
        <StyledLink href="/sign-up" className="self-end mt-3">
          Forgot your password?
        </StyledLink>
        <StyledView className="mt-10">
          <Button>Log in</Button>
        </StyledView>
        <StyledView className="flex-row self-center font-poppinsRegular text-xs text-neutral-1 mt-10">
          <StyledText className="font-poppinsMedium text-xs text-neutral-4 mr-[5px]">
            Don&apos;t have an account?
          </StyledText>

          <StyledLink
            href="/sign-up"
            className="font-poppinsSemiBold text-xs text-primary-1 "
          >
            Sign up
          </StyledLink>
        </StyledView>
      </StyledView>
    </Base>
  );
}
