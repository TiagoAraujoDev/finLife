import { useContext } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { currencyFormatter } from "../../utils/formatter";

import {
  AmountDisplay,
  DashboardCard,
  DashboardContainer,
  Header,
} from "./styles";

export const Dashboard = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return (
    <DashboardContainer>
      <DashboardCard>
        <Header>
          <span>Income</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </Header>
        <AmountDisplay>
          {currencyFormatter.format(summary.income)}
        </AmountDisplay>
      </DashboardCard>
      <DashboardCard>
        <Header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </Header>
        <AmountDisplay>
          {currencyFormatter.format(summary.outcome)}
        </AmountDisplay>
      </DashboardCard>
      <DashboardCard variant={"green"}>
        <Header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </Header>
        <AmountDisplay>{currencyFormatter.format(summary.total)}</AmountDisplay>
      </DashboardCard>
    </DashboardContainer>
  );
};
