import { DefaultTable } from "@/components/DefaultTable";
import { SelectMenu } from "@/components/SelectMenu";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { Equipe } from "@/types/equipe";

export default async function Cadastros() {
  const response = await fetchWrapper<Equipe[]>("equipes");
  console.log(response.data);

  const equipes = response.data;

  return (
    <>
      <SelectMenu />
      <DefaultTable equipes={equipes} />
    </>
  );
}
