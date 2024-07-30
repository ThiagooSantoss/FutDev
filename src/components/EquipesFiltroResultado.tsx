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
      const filtrarEquipes = () => {
        if (search.texto.trim() === '') {
          return equipes;
        }
    
        return equipes.filter((equipe) => {
          const todosJogadores = [...equipe.titulares, ...equipe.reservas];
          const textoLower = search.texto.toLowerCase();
    
          const nomeEquipe = equipe.nome.toLowerCase().includes(textoLower);
          const nomeTreinador = equipe.treinador.toLowerCase().includes(textoLower);
          const jogadorEncontrado = todosJogadores.some((jogador) =>
            jogador.apelido.toLowerCase().includes(textoLower)
          );
    
          if (search.tipo === SearchTipos.Equipes) {
            return nomeEquipe;
          }
    
          if (search.tipo === SearchTipos.Treinadores) {
            return nomeTreinador;
          }
    
          if (search.tipo === SearchTipos.Jogadores) {
            return jogadorEncontrado;
          }
    
          if (search.tipo === SearchTipos.Geral) {
            return nomeEquipe || nomeTreinador || jogadorEncontrado;
          }
    
          return false;
        });
      };
    
      const equipesFiltradas = filtrarEquipes();
      setEquipesParaMostrar(equipesFiltradas);
    }, [search, equipes]);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />

      <ul className="flex flex-wrap gap-8">
        {equipesParaMostrar && equipesParaMostrar.length > 0 ? (
          equipesParaMostrar.map((equipe) => (
            <EquipeCard key={equipe.id} equipe={equipe} />
          ))
        ) : (
          <h3>Resultado não encontrado</h3>
        )}
      </ul>
    </div>
  );
};
