import { Link } from "react-router-dom";
import FormSignUp from "../components/FormSignUp";

import { ContainerSignIn as ContainerSignUp } from "./SignInPage";
export default function SignUpPage() {
  return (
    <ContainerSignUp>
      <h1>MyWallet</h1>
      <FormSignUp />
      <Link to="/">Já tem conta ? Entre agora !</Link>
    </ContainerSignUp>
  );
}
