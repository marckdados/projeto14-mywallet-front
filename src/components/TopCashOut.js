import styled from "styled-components";

export default function TopCashOut() {
  return (
    <ContainerTop>
      <span>Nova saída</span>
    </ContainerTop>
  );
}

const ContainerTop = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  align-items: center;

  span {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5em;
  }
`;
