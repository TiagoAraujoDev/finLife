import { useContext } from "react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionTable,
} from "./styles";


export const Home = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      R${transaction.amount.toFixed(2)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  );
};
