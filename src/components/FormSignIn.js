import axios from "axios";
import styled from "styled-components";

export default function FormSignIn({ email, setEmail, password, setPassword }) {
  function setSignIn(event) {
    event.preventDefault();

    if (!email || !password) {
      return alert("Você precisa digitar todos os campos");
    }

    const promise = axios.post("http://localhost:5000/sign-in", {
      email,
      password,
    });

    promise
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        return alert(error);
      });
  }
  return (
    <ContainerFormSignIn onSubmit={setSignIn}>
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
      <button>Entrar</button>
    </ContainerFormSignIn>
  );
}

export const ContainerFormSignIn = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-family: "Raleway";
  input {
    height: 60px;
    border: none;
    border-radius: 6px;
    padding: 0 10px;
    margin: 10px 0;
    color: #000000;
    font-size: 1.2em;
    &::placeholder {
      color: #000000;
    }
  }
  button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.2em;
    background-color: #a328d6;
    margin: 10px 0;
  }
`;
