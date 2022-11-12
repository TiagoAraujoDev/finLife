import styled, { css } from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface DashboardCardProps {
  variant?: "green";
}

export const DashboardCard = styled.div<DashboardCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 22rem;
  height: 8.5625rem;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-600"]};

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  color: ${(props) => props.theme["gray-300"]};
`;

export const AmountDisplay = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};
`;
