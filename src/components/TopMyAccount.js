import styled from "styled-components";
import { IoIosLogOut } from "react-icons/io";

export default function TopMyAccount() {
  return (
    <ContainerTopMyAccount>
      <div>
        <span>Olá, Fulano</span>
        <IoIosLogOut />
      </div>
    </ContainerTopMyAccount>
  );
}

const ContainerTopMyAccount = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 1.7em;
  color: #ffffff;

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
    }
  }
`;
