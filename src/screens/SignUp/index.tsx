import { Text, View } from "react-native";

import { Link } from "expo-router";

import { styled } from "nativewind";

import Base from "../../templates/Base";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";

export default function SignUp() {
  return (
    <Base title="Sign Up">
      <StyledView className="flex-1 bg-white rounded-t-[40px] p-6">
        <StyledText className="font-poppinsSemiBold text-2xl text-primary-1">
          Create an account
        </StyledText>
        <StyledText className="font-poppinsMedium text-xs text-neutral-1 mb-8">
          Add your personal details bellow
        </StyledText>
        <StyledView className="space-y-4">
          <StyledView>
            <Input
              placeholder="John"
              label="First name"
              keyboardType="default"
            />
          </StyledView>
          <StyledView>
            <Input placeholder="Doe" label="Last name" keyboardType="default" />
          </StyledView>
          <StyledView>
            <Input
              placeholder="john@doe.com"
              label="Email"
              keyboardType="email-address"
            />
          </StyledView>
          <StyledView className="mb-2">
            <Input
              placeholder="Password (Min. 8 characters)"
              label="Password"
              showPasswordVisibilityIcon
            />
          </StyledView>
          <StyledView className="flex-row">
            <Checkbox handleChange={(value) => console.log(value)} />
            <StyledText className="ml-3 font-poppinsRegular text-sm text-neutral-1 max-w-[244px]">
              By creating an account your agree to our{" "}
              <StyledLink
                href="/"
                className="font-poppinsSemiBold text-sm text-primary-1"
              >
                Term and Condtions
              </StyledLink>
            </StyledText>
          </StyledView>
        </StyledView>

        <StyledView className="mt-10">
          <Button>Sign up</Button>
        </StyledView>
        <StyledView className="flex-row self-center font-poppinsRegular text-xs text-neutral-1 mt-10">
          <StyledText className="font-poppinsMedium text-xs text-neutral-1 mr-[5px]">
            Already have an account?
          </StyledText>

          <StyledLink
            href="/"
            className="font-poppinsSemiBold text-xs text-primary-1 "
          >
            Log in
          </StyledLink>
        </StyledView>
      </StyledView>
    </Base>
  );
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);
