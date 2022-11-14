import { useContext } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import {
  AmountDisplay,
  DashboardCard,
  DashboardContainer,
  Header
} from "./styles";

export const Dashboard = () => {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)
  return (
    <DashboardContainer>
      <DashboardCard>
        <Header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Header>
        <AmountDisplay>R$17.500,00</AmountDisplay>
      </DashboardCard>
      <DashboardCard>
        <Header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </Header>
        <AmountDisplay>R$17.500,00</AmountDisplay>
      </DashboardCard>
      <DashboardCard variant={"green"}>
        <Header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Header>
        <AmountDisplay>R$17.500,00</AmountDisplay>
      </DashboardCard>
    </DashboardContainer>
  );
};
