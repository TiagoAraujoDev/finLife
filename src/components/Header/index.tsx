import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <TransactionButton>New Transaction</TransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
