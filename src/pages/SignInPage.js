import { Link } from "react-router-dom";

import styled from "styled-components";
import FormSignIn from "../components/FormSignIn";

export default function SignInPage({ email, setEmail, password, setPassword }) {
  return (
    <ContainerSignIn>
      <h1>MyWallet</h1>
      <FormSignIn
        email={email}
        setEmail={setEmail}
        setPassword={setPassword}
        password={password}
      />
      <Link to="/sign-up">Primeira vez ? Cadastre-se !</Link>
    </ContainerSignIn>
  );
}

export const ContainerSignIn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9259bd;

  h1 {
    font-family: "Saira Stencil One";
    font-size: 2em;
    color: #ffffff;
  }

  a {
    color: #ffffff;
    font-family: "Raleway";
    font-weight: 700;
    text-decoration: none;
  }
`;
