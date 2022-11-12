import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionTable
} from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Web development</td>
              <td>
                <PriceHighlight variant="income">R$12.500,00</PriceHighlight>
              </td>
              <td>Sells</td>
              <td>12/10/22</td>
            </tr>
            <tr>
              <td width="50%">Buy a bike</td>
              <td>
                <PriceHighlight variant="outcome">- R$12.500,00</PriceHighlight>
              </td>
              <td>Buy</td>
              <td>12/11/22</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </>
  );
};
