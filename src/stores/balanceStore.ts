import { create } from "zustand";

type BalanceStore = {
  total: number;
  incrementTotal: (value: number) => void;
  decrementTotal: (value: number) => void;
};

export const useBalance = create<BalanceStore>((set) => ({
  total: 3469.52,
  incrementTotal: (value: number) =>
    set((state) => ({ total: state.total + value })),
  decrementTotal: (value: number) =>
    set((state) => ({ total: state.total - value })),
}));
