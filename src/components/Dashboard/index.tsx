import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { currencyFormatter } from "../../utils/formatter";

import {
  AmountDisplay,
  DashboardCard,
  DashboardContainer,
  Header,
} from "./styles";
import { useGetSummary } from "../../hooks/useGetSummary";

export const Dashboard = () => {
  const summary = useGetSummary();

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
