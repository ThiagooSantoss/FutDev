import { Equipe } from "@/types/equipe";
import { EquipeCard } from "./EquipeCard";

interface ListaEquipesProps {
  equipes: Equipe[];
}

export const ListaEquipes = (props: ListaEquipesProps) => {
  const { equipes } = props;

  return (
    <ul className="flex flex-wrap gap-8 p-20 bg-zinc-50 h-svh">
      {equipes.map((equipe) => (
        <EquipeCard key={equipe.id} equipe={equipe} />
      ))}
    </ul>
  );
};
