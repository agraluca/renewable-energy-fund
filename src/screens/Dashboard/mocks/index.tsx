import Groceries from "../../../assets/svgs/Groceries";
import Income from "../../../assets/svgs/Income";
import WaterBill from "../../../assets/svgs/WaterBill";

export const transactionData = [
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
