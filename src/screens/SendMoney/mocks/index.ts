export const cardOptions = [
  { key: "1", value: "Visa **** **** 1234" },
  { key: "2", value: "Master **** **** 4321" },
];

export const transactionOptions = [
  { id: "idCardNumber", title: "Transfer via card number", icon: "card" },
  { id: "idSameBank", title: "Transfer to the same bank", icon: "person" },
  { id: "idAnotherBank", title: "Transfer to another bank", icon: "bank" },
] as const;

export const payeeOptions = [
  { id: "emmaId", name: "Emma", image: require("../../../assets/amanda.png") },
  {
    id: "justinId",
    name: "Justin",
    image: require("../../../assets/justin.png"),
  },
  {
    id: "amandaId",
    name: "Amanda",
    image: require("../../../assets/amanda.png"),
  },
] as const;

export const bankOptions = [
  { key: "citibank", value: "Citibank" },
  { key: "bankofamerica", value: "Bank of America" },
];

export const branchOptions = [
  { key: "newyork", value: "New York" },
  { key: "losangeles", value: "Los Angeles" },
];
