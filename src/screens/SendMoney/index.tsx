import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from "react-native";
import LeftArrow from "../../assets/svgs/LeftArrow";
import { useBalance } from "../../stores/balanceStore";
import TransactionCard from "../../components/TransactionCard";
import {
  bankOptions,
  branchOptions,
  cardOptions,
  payeeOptions,
  transactionOptions,
} from "./mocks";
import useTransaction from "./useTransaction";

import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Controller } from "react-hook-form";
import Checkbox from "../../components/Checkbox";
import { router } from "expo-router";
import PayeeCard from "../../components/PayeeCard";
import usePermission from "../../hooks/usePermission";

export default function SendMoney() {
  usePermission();
  const statusHeight = StatusBar.currentHeight || 0;

  const { errors, control, handleSubmit, handleSendMoney } = useTransaction();
  const { total } = useBalance();

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        marginTop: statusHeight,
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#fff"
        hidden={false}
        animated
      />
      <ScrollView className="p-6" showsVerticalScrollIndicator={false}>
        <View className="pb-14">
          <Pressable
            onPress={() => router.replace("/dashboard")}
            className="flex-row space-x-4 items-center mb-6"
          >
            <LeftArrow />
            <Text className="font-poppinsSemiBold text-xl text-neutral-1">
              Send Money
            </Text>
          </Pressable>
          <View>
            <Select
              label=" Choose account/ card"
              name="paymentMethod"
              control={control}
              data={cardOptions}
              placeholder="Select payment method"
            />

            <Text className="font-poppinsSemiBold text-primary-1 text-xs pt-2 pl-3">
              Available balance : ${total}
            </Text>
          </View>
          <View className="space-y-4">
            <Text className="font-poppinsSemiBold text-text-2 text-xs pt-6">
              Choose transaction
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Controller
                control={control}
                name="transactionType"
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row space-x-4">
                    {transactionOptions?.map((item) => (
                      <View key={item.title} className="flex-row">
                        <TransactionCard
                          isActive={value === item.id}
                          onPress={() => onChange(item.id)}
                          icon={item.icon}
                          title={item.title}
                        />
                      </View>
                    ))}
                  </View>
                )}
              />
            </ScrollView>
          </View>
          <View className="space-y-4">
            <View className="flex-row justify-between">
              <Text className="font-poppinsSemiBold text-text-2 text-xs pt-6">
                Choose payee
              </Text>
              <Text className="font-poppinsSemiBold text-primary-1 text-xs pt-6">
                Search payee
              </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Controller
                control={control}
                name="payee"
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row items-center space-x-4">
                    <PayeeCard
                      addNew
                      onPress={() => console.log("New payee")}
                    />
                    {payeeOptions.map((item) => (
                      <View key={item.id} className="flex-row py-2">
                        <PayeeCard
                          isActive={value === item.id}
                          onPress={() => onChange(item.id)}
                          image={item.image}
                          name={item.name}
                        />
                      </View>
                    ))}
                  </View>
                )}
              />
            </ScrollView>
          </View>
          <View className="mt-3 space-y-4">
            <View>
              <Select
                label="Choose bank"
                name="bank"
                control={control}
                data={bankOptions}
                placeholder="Choose bank"
                error={errors.bank?.message}
              />
            </View>
            <View>
              <Select
                label="Choose branch"
                name="branch"
                control={control}
                data={branchOptions}
                placeholder="Choose branch"
                error={errors.branch?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="payeeName"
                label="Payee name"
                error={errors.payeeName?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="cardNumber"
                label="Card number"
                keyboardType="numeric"
                error={errors.cardNumber?.message}
              />
            </View>
            <View>
              <Input
                prefix="$"
                control={control}
                name="amount"
                label="Amount"
                keyboardType="numeric"
                error={errors.amount?.message}
              />
            </View>
            <View>
              <Input
                control={control}
                name="reference"
                label="Reference"
                error={errors.reference?.message}
              />
            </View>
            <View>
              <Checkbox
                control={control}
                name="save"
                error={errors.save?.message}
                message={
                  <Text className="ml-3 font-poppinsSemiBold text-sm text-primary-1">
                    Save Payee details
                  </Text>
                }
              />
            </View>
            <Button onPress={handleSubmit((form) => handleSendMoney(form))}>
              Confirm
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
