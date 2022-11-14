import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
  }

  input {
    height: 3.375rem;
    background-color: ${(props) => props.theme["gray-900"]};
    border: none;
    border-radius: 6px;
    padding: 0 1.5rem;
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  /* hide arrows Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield !important;
  }

  button[type="submit"] {
    height: 3.375rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;

    border: none;
    border-radius: 6px;

    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    font-weight: 700;

    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme["green-700"]};
      transition: ease-in all 0.2s;
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  color: ${(props) => props.theme["gray-500"]};
  border: none;
  line-height: 0;
  cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 3.375rem;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};
  border: 0;
  border-radius: 6px;
  box-shadow: none;
  cursor: pointer;

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme["gray-600"]};
    transition: ease-in all 0.2s;
  }

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="checked"] {
    background-color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
    color: ${(props) => props.theme.white};
    box-shadow: none;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
