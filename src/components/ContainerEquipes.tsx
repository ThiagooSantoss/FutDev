import React from "react";
import { Equipe } from "@/types/equipe";
import { EquipesFiltroResultado } from "./EquipesFiltroResultado";
import { DuelContainer } from "./DuelContainer";

interface ContainerEquipesProps {
  equipes: Equipe[];
}

export const ContainerEquipes: React.FC<ContainerEquipesProps> = ({
  equipes,
}) => {
  return (
    <div>
      <EquipesFiltroResultado equipes={equipes} />
      <DuelContainer equipes={equipes} />
    </div>
  );
};
