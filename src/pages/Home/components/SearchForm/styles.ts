import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.875rem 2rem;
    font-weight: 700;
    color: ${(props) => props.theme["green-300"]};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;

    cursor: pointer;

    &:disabled { 
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled)hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      transition: color 0.2s, background-color 0.2s, border-color 0.2s;
    }
  }
`;
