"use client";

import React, { useState } from "react";
import { Equipe } from "@/types/equipe";

interface DuelContainerProps {
  equipes: Equipe[];
}

const DuelContainer: React.FC<DuelContainerProps> = ({ equipes }) => {
  const [equipe1, setEquipe1] = useState<Equipe | null>(null);
  const [equipe2, setEquipe2] = useState<Equipe | null>(null);

  const handleDragStart = (e, equipeId) => {
    e.dataTransfer.setData("text/plain", equipeId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, setEquipe) => {
    const equipeId = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const equipe = equipes.find((e) => e.id === equipeId);
    setEquipe(equipe);
  };

  const renderJogadores = (equipeId) => {
    const equipe = equipes.find((e) => e.id === equipeId);
    if (!equipe) return null;

    const todosJogadores = [...equipe.titulares, ...equipe.reservas];
    return todosJogadores.map((jogador) => (
      <div
        key={jogador.id}
        draggable
        onDragStart={(e) => handleDragStart(e, jogador.id)}
        className="p-2 bg-white border rounded mt-2"
      >
        {jogador.apelido}
      </div>
    ));
  };

  return (
    <div className="flex justify-around p-4">
      <div
        id="section1"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, setEquipe1)}
        className="w-1/2 h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">{equipe1 ? equipe1.nome : "Equipe 1"}</h2>
        {equipe1 && renderJogadores(equipe1.id)}
      </div>
      <div
        id="section2"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, setEquipe2)}
        className="w-1/2 h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">{equipe2 ? equipe2.nome : "Equipe 2"}</h2>
        {equipe2 && renderJogadores(equipe2.id)}
      </div>
    </div>
  );
};

export default DuelContainer;
