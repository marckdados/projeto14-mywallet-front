import styled from "styled-components";

export default function RegistersMyAccount() {
  return (
    <ContainerRegisters>
      <ul>
        <h1>Não há registros de entrada e saída.</h1>
      </ul>
    </ContainerRegisters>
  );
}

const ContainerRegisters = styled.div`
  width: 90%;
  height: 65vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 1.4em;
    color: #868686;
    text-align: center;
    padding: 0 40px;
  }
`;
