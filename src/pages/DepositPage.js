import styled from "styled-components";
import FormDeposit from "../components/FormDeposit";
import TopDeposit from "../components/TopDeposit";

export default function DepositPage() {
  return (
    <ContainerDeposit>
      <TopDeposit />
      <FormDeposit />
    </ContainerDeposit>
  );
}

export const ContainerDeposit = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Raleway";
  background-color: #9259bd;
`;
