import { ContainerFormSignIn as ContainerFormDeposit } from "./FormSignIn";

export default function FormDeposit() {
  return (
    <ContainerFormDeposit>
      <input placeholder="Valor" />
      <input placeholder="Descrição" />
      <button>Salvar</button>
    </ContainerFormDeposit>
  );
}
