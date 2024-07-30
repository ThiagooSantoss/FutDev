import DuelContainer from "@/components/DuelContainer";
import { EquipesFiltroResultado } from "@/components/EquipesFiltroResultado";
import { Equipe } from "@/types/equipe";
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Equipes() {
  const response = await fetchWrapper<Equipe[]>("equipes");

  return (
    <>
      <DuelContainer />

      <div className="h-svh bg-zinc-50 p-20">
        <EquipesFiltroResultado equipes={response.data} />
      </div>
    </>
  );
}
