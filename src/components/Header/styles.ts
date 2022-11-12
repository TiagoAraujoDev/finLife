import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TransactionButton = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["green-500"]};

  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme["gray-100"]};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-300"]};
    transition: ease-in background-color 0.2s;
  }
`;
