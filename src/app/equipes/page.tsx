"use client";
import { EquipeCard } from "@/components/EquipeCard";
import { SearchBar } from "@/components/SearchBar";
import { Equipe } from "@/types/equipe";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useEffect, useState } from "react";

export default function Equipes() {
  const [search, setSearch] = useState("");
  const [equipes, setEquipes] = useState<Equipe[]>(null);

  const equipesModificado = equipes.filter((equipe) =>
    equipe.nome.toLowerCase().includes(search)
  );
  console.log(equipesModificado);
  const getEquipes = async () => await fetchWrapper<Equipe[]>("/equipes");

  useEffect(() => {
    const tempEquipes = getEquipes();
    setEquipes(tempEquipes);
  }, []);

  return (
    <div className="h-svh bg-zinc-50 p-20">
      <SearchBar search={search} setSearch={setSearch} />
      <ul className="flex flex-wrap gap-8">
        {equipesModificado.map((equipe) => (
          <EquipeCard key={equipe.id} equipe={equipe} />
        ))}
      </ul>
    </div>
  );
}
