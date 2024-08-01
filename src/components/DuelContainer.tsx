"use client";

import React, { DragEvent, useState } from "react";
import { Equipe } from "@/types/equipe";

interface DuelContainerProps {
  equipes: Equipe[];
}

const NUMERO_DE_TITULARES = 11;

export const DuelContainer: React.FC<DuelContainerProps> = ({ equipes }) => {
  const [equipe1, setEquipe1] = useState<Equipe>({} as Equipe);
  const [equipe2, setEquipe2] = useState<Equipe>({} as Equipe);

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    setEquipe: (equipe: Equipe) => void
  ) => {
    const equipeId = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const equipe = equipes.find((e) => e.id === equipeId);

    if (equipe) {
      setEquipe(equipe);
    }
  };

  const CardDuelo = ({
    sectionId,
    setEquipe,
    equipe,
  }: {
    sectionId: string;
    setEquipe: (equipe: Equipe) => void;
    equipe: Equipe;
  }) => {
    if (equipe.titulares?.length > 0) {
      const blocosParaCompletar = NUMERO_DE_TITULARES - equipe.titulares.length;

      return (
        <div
          id={sectionId}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, setEquipe)}
          className="w-1/2 min-h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
        >
          <h2 className="text-center">{equipe.nome}</h2>

          {equipe.titulares.map((jogador) => (
            <div
              key={jogador.id}
              className="p-2 h-10 bg-white border rounded mt-2"
            >
              {jogador.numero} - {jogador.apelido} -{" "}
              {Math.round(jogador.overall)}
            </div>
          ))}

          {Array.from({ length: blocosParaCompletar }).map((_, index) => (
            <div
              key={index}
              className="p-2 h-10 bg-white border rounded mt-2"
            />
          ))}
        </div>
      );
    }

    return (
      <div
        id={sectionId}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, setEquipe)}
        className="w-1/2 min-h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">
          {sectionId === "section1" ? "Time 01" : "Time 02"}
        </h2>

        {Array.from({ length: NUMERO_DE_TITULARES }).map((_, index) => (
          <div key={index} className="p-2 h-10 bg-white border rounded mt-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-around p-4 relative">
      <CardDuelo
        equipe={equipe1}
        sectionId={"section1"}
        setEquipe={setEquipe1}
      />

      <button className="bg-emerald-800 p-6 rounded-full hover:bg-green-900 text-white font-semibold text-xl absolute translate-y-1/2 top-1/2">
        Duelar
      </button>

      <CardDuelo
        equipe={equipe2}
        sectionId={"section2"}
        setEquipe={setEquipe2}
      />
    </div>
  );
};
