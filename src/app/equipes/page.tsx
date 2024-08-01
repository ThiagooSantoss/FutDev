import { ContainerEquipes } from "@/components/ContainerEquipes";
import { Equipe } from "@/types/equipe";
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Equipes() {
  const response = await fetchWrapper<Equipe[]>("equipes");

  console.log("API Response:", response);

  const equipes = response.data; // Extraia a propriedade `data`

  return <ContainerEquipes equipes={equipes} />;
}
