import React from "react";
import { Equipe } from "@/types/equipe";
import EquipesFiltroResultado from "./EquipesFiltroResultado";
import DuelContainer from "./DuelContainer";

interface ContainerEquipesProps {
  equipes: Equipe[];
}

const ContainerEquipes: React.FC<ContainerEquipesProps> = ({ equipes }) => {
  console.log("ContainerEquipes Props:", equipes); // Verifique as props recebidas
  return (
    <div>
      <EquipesFiltroResultado equipes={equipes} />
      <DuelContainer equipes={equipes} />
    </div>
  );
};

export default ContainerEquipes;
