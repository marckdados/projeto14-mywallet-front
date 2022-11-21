import styled from "styled-components";

export default function TopDeposit() {
  return (
    <ContainerTop>
      <span>Nova entrada</span>
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
