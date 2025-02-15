"use client";

import { EquipesTable } from "@/components/ContainerCadastros/EquipesTable";
import { EstadiosTable } from "@/components/ContainerCadastros/EstadiosTable";
import { JogadoresTable } from "@/components/ContainerCadastros/JogadoresTable";

import { SelectMenu } from "@/components/ContainerCadastros/SelectMenu";
import { Equipe } from "@/types/equipe";
import { Estadio } from "@/types/estadio";
import { Jogador } from "@/types/jogador";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useEffect, useState } from "react";

interface ContainerEquipesProps {
  equipes: Equipe[];
}

export const ContainerCadastros = () => {
  const [selectMenuValue, setSelectMenuValue] = useState("Equipes");
  const [resultado, setResultado] = useState<Equipe[] | Estadio[] | Jogador[]>(
    []
  );

  async function fetchData(savedItem: string) {
    let response;
    if (savedItem === "Equipes") {
      response = await fetchWrapper<Equipe[]>("equipes");
    } else if (savedItem === "Estádios") {
      response = await fetchWrapper<Estadio[]>("estadios");
    } else if (savedItem === "Jogadores") {
      response = await fetchWrapper<Jogador[]>("jogadores");
    }
    setResultado(response?.data || []);
  }

  useEffect(() => {
    const savedItem = localStorage.getItem("selectedItem");
    if (savedItem) {
      setSelectMenuValue(savedItem);
    }
    fetchData(savedItem || "Equipes");
  }, [selectMenuValue]);

  return (
    <>
      <SelectMenu
        selectMenuValue={selectMenuValue}
        setSelectMenuValue={setSelectMenuValue}
      />
      {selectMenuValue === "Equipes" && (
        <EquipesTable dados={resultado as Equipe[]} />
      )}
      {selectMenuValue === "Estádios" && (
        <EstadiosTable estadios={resultado as Estadio[]} />
      )}
      {selectMenuValue === "Jogadores" && (
        <JogadoresTable dados={resultado as Jogador[]} />
      )}
    </>
  );
};
