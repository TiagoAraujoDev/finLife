import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createAt: string;
}

interface CreateNewTransactionData {
  description: string;
  amount: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateNewTransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async (query?: string): Promise<void> => {
    const response = await api.get("transactions", {
      params: {
        _sort: "createAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  };

  const createTransaction = async (
    data: CreateNewTransactionData
  ): Promise<void> => {
    const { description, amount, category, type } = data;

    const response = await api.post("transactions", {
      description,
      amount,
      category,
      type,
      createAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
