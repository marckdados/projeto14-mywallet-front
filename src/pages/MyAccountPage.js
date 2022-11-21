import styled from "styled-components";
import TopMyAccount from "../components/TopMyAccount";
import RegistersMyAccount from "../components/RegistersMyAccount";
import FooterMyAccount from "../components/FooterMyAccount";
export default function MyAccountPage() {
  return (
    <ContainerMyAccountPage>
      <TopMyAccount />
      <RegistersMyAccount />

      <FooterMyAccount />
    </ContainerMyAccountPage>
  );
}

const ContainerMyAccountPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9259bd;
  font-family: "Raleway";
`;
