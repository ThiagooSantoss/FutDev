"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Equipe } from "@/types/equipe";
import { EquipeCard } from "./EquipeCard";

interface EquipesFiltroResultadoProps {
  equipes: Equipe[];
}

export enum SearchTipos {
  Geral = "Geral",
  Equipes = "Equipes",
  Jogadores = "Jogadores",
  Treinadores = "Treinadores",
}

export interface SearchProps {
  texto: string;
  tipo: SearchTipos;
}

export const EquipesFiltroResultado = ({
  equipes,
}: EquipesFiltroResultadoProps) => {
  const [search, setSearch] = useState<SearchProps>({
    texto: "",
    tipo: SearchTipos.Geral,
  });

  const [equipesParaMostrar, setEquipesParaMostrar] =
    useState<Equipe[]>(equipes);

  useEffect(() => {
    let equipesTemp: Equipe[] = [];

    if (search.tipo === SearchTipos.Equipes) {
      equipesTemp = equipes.filter((equipe) =>
        equipe.nome.toLowerCase().includes(search.texto)
      );

      setEquipesParaMostrar(equipesTemp);
      return;
    }

    setEquipesParaMostrar(equipes);
  }, [search, equipes]);

  console.log(equipesParaMostrar);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />

      <ul className="flex flex-wrap gap-8">
        {equipesParaMostrar.map((equipe) => (
          <EquipeCard key={equipe.id} equipe={equipe} />
        ))}
      </ul>
    </div>
  );
};
