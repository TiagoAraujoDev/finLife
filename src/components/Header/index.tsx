import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";

import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TransactionButton>New Transaction</TransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
