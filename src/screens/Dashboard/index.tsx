import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

import Base from "../../templates/Base";

import InteractiveChart from "../../components/InteractiveLineChart";
import ListItem from "./components/ListItem";

import Transfer from "../../assets/svgs/Transfer";

import { transactionData } from "./mocks";
import usePermission from "../../hooks/usePermission";

export default function Dashboard() {
  usePermission();
  return (
    <Base title="Current account" showBalance>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-6 bg-white items-center rounded-t-[40px] pt-[132px]">
          <TouchableOpacity
            onPress={() => router.replace("/send-money")}
            className="items-center rounded-lg border-none bg-purple-4 p-[15px] w-full mb-[46px]"
          >
            <View className="flex-row space-x-[10px]">
              <Transfer />
              <Text className="font-poppinsSemiBold text-xs text-neutral-1">
                Send money
              </Text>
            </View>
          </TouchableOpacity>
          <InteractiveChart />
          <View className="w-full mt-[57px] space-y-[23px]">
            {transactionData.map((item) => (
              <View
                key={item.title + item.id}
                className="w-full border-b-[1px] border-neutral-4 pb-4"
              >
                <Text className="self-start font-poppinsSemiBold text-xs text-text-default">
                  {item.title}
                </Text>
                {item.transactions.map((transaction) => (
                  <ListItem
                    key={transaction.text + transaction.value}
                    {...transaction}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Base>
  );
}
