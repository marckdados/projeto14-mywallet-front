import { useState } from "react";
import axios from "axios";
import { ContainerFormSignIn as ContainerFormSignUp } from "../components/FormSignIn";
import { useNavigate } from "react-router-dom";
export default function FormSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function setSignUp(event) {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return alert("Preencha todos os campos !");
    }

    if (password !== confirmPassword) {
      return alert("As senhas precisam ser iguais !");
    }

    const promise = axios.post("http://localhost:5000/sign-up", {
      name,
      email,
      password,
    });

    promise
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert({ error });
      });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/");
  }

  return (
    <ContainerFormSignUp onSubmit={setSignUp}>
      <input
        placeholder="Nome"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Confirme a senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button>Cadastrar</button>
    </ContainerFormSignUp>
  );
}
