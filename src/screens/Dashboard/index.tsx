import { styled } from "nativewind";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Base from "../../templates/Base";
import Transfer from "../../assets/svgs/Transfer";
import InteractiveChart from "../../components/InteractiveLineChart";
import Income from "../../assets/svgs/Income";
import WaterBill from "../../assets/svgs/WaterBill";
import Groceries from "../../assets/svgs/Groceries";
import ListItem from "./components/ListItem";
import { Link } from "expo-router";

const data = [
  {
    id: "1",
    title: "Today",
    transactions: [
      {
        id: "1",
        image: <Income />,
        text: "Income: Salary Oct",
        value: 1200,
      },
    ],
  },
  {
    id: "2",
    title: "Yesterday",
    transactions: [
      {
        id: "3",
        image: <WaterBill />,
        text: "Water Bill",
        value: 500,
      },
      {
        id: "4",
        image: <Groceries />,
        text: "Groceries",
        value: -200,
      },
    ],
  },
];

export default function Dashboard() {
  return (
    <Base title="Current account" showBalance>
      <StyledScrollView>
        <StyledView className="flex-1 px-6  bg-white items-center rounded-t-[40px] pt-[132px]">
          <StyledButton className="flex items-center rounded-lg border-none bg-purple-4 p-[15px] w-full mb-[46px]">
            <StyledView className="flex-row space-x-[10px]">
              <Transfer />
              <StyledText className="font-poppinsSemiBold text-xs text-neutral-1">
                <Link href="/send-money">Send money </Link>
              </StyledText>
            </StyledView>
          </StyledButton>
          <InteractiveChart />
          <StyledView className="w-full mt-[57px] space-y-[23px]">
            {data.map((item) => (
              <StyledView
                key={item.title + item.id}
                className="w-full border-b-[1px] border-neutral-2 pb-4"
              >
                <StyledText className="self-start font-poppinsSemiBold text-xs text-text-default">
                  {item.title}
                </StyledText>
                {item.transactions.map((transaction) => (
                  <ListItem
                    key={transaction.text + transaction.value}
                    {...transaction}
                  />
                ))}
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </Base>
  );
}

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
