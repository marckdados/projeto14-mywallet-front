import { ContainerFormSignIn as ContainerFormCashOut } from "./FormSignIn";

export default function FormCashOut() {
  return (
    <ContainerFormCashOut>
      <input placeholder="Valor" />
      <input placeholder="Descrição" />
      <button>Salvar</button>
    </ContainerFormCashOut>
  );
}
