import styled from "styled-components";
import FormCashOut from "../components/FormCashOut";
import TopCashOut from "../components/TopCashOut";

export default function CashOutPage() {
  return (
    <ContainerCashOut>
      <TopCashOut />
      <FormCashOut />
    </ContainerCashOut>
  );
}

export const ContainerCashOut = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway";
  background-color: #9259bd;
`;
