"use client";

import React, { DragEvent, useState } from "react";
import { Equipe } from "@/types/equipe";
import Image from "next/image";

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

    if (equipe?.titulares.length !== NUMERO_DE_TITULARES) {
      alert("Número de titulares inválido!");
      return;
    }

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
              className="flex items-center justify-between gap-4 p-2 bg-white border rounded mt-2"
            >
              <div className="flex items-center gap-3 w-96">
                <Image
                  className="rounded-full h-10 object-cover"
                  src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
                  alt={`foto do jogador ${jogador.apelido}`}
                  width={40}
                  height={40}
                />
                <span className="">{jogador.numero}</span>
                <span className="">{jogador.apelido}</span>
              </div>
              <span>{jogador.posicoes}</span>
              <span className="w-10">{Math.round(jogador.overall)}</span>
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
    <div className="flex gap-36 justify-around mt-8 relative">
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
