import styled from "styled-components";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { Link } from "react-router-dom";
export default function FooterMyAccount() {
  return (
    <ContainerFooter>
      <Link to="/deposit">
        <Buttons>
          <IoIosAddCircleOutline />
          <span>Nova entrada</span>
        </Buttons>
      </Link>

      <Link to="/cashout">
        <Buttons>
          <IoIosRemoveCircleOutline />
          <span>Nova saída</span>
        </Buttons>
      </Link>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  a {
    width: 40%;
  }
`;

const Buttons = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: #ffffff;
  background-color: #a328d6;
  padding: 0 10px;

  span {
    font-size: 1.2em;
    font-weight: 700;
    text-align: center;
  }
  svg {
    font-size: 1.5em;
  }
`;
