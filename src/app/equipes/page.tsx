import { EquipeCard } from "@/components/EquipeCard";
import { SearchBar } from "@/components/SearchBar";
import { Equipe } from "@/types/equipe";
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Equipes() {
  const equipes = await fetchWrapper<Equipe[]>("/equipes");

  return (
    <div className="h-svh bg-zinc-50 p-20">
      <SearchBar />
      <ul className="flex flex-wrap gap-8">
        {equipes.map((equipe) => (
          <EquipeCard key={equipe.id} equipe={equipe} />
        ))}
      </ul>
    </div>
  );
}
