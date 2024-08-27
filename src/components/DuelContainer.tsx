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
  const [resultado, setResultado] = useState<string | null>(null);

  const calcularOverall = (equipe: Equipe) => {
    if (!equipe.titulares || equipe.titulares.length !== NUMERO_DE_TITULARES) {
      return 0;
    }

    // Soma os overalls de todos os titulares
    const overallTotal = equipe.titulares.reduce((total, jogador) => {
      return total + jogador.overall;
    }, 0);

    return overallTotal / NUMERO_DE_TITULARES;
  };

  const calcularFatorAleatorio = () => {
    // Um valor aleatório entre -0.05 (reduz 5%) e 0.05 (aumenta 5%)
    return Math.random() * 0.1 - 0.05;
  };

  const onDuelar = () => {
    const overallEquipe1 = calcularOverall(equipe1);
    const overallEquipe2 = calcularOverall(equipe2);

    // Adicionando o fator aleatório ao overall das equipes
    const overallFinalEquipe1 = overallEquipe1 * (1 + calcularFatorAleatorio());
    const overallFinalEquipe2 = overallEquipe2 * (1 + calcularFatorAleatorio());

    const placares = {
      vitoria: ["1 x 0", "2 x 1", "2 x 0", "3 x 0"],
      derrota: ["0 x 1", "1 x 2", "0 x 2", "0 x 3"],
      empate: ["0 x 0", "1 x 1", "2 x 2", "3 x 3"],
    };

    console.log(
      `Iniciando a partida entre ${equipe1.nome} e ${equipe2.nome}...`
    );

    console.log(
      `Overall do ${equipe1.nome}: ${overallFinalEquipe1.toFixed(2)}`
    );
    console.log(
      `Overall do ${equipe2.nome}: ${overallFinalEquipe2.toFixed(2)}`
    );

    let resultadoDuelo;

    const limiteEmpate = 0.5;

    if (Math.abs(overallFinalEquipe1 - overallFinalEquipe2) <= limiteEmpate) {
      const placarEmpate =
        placares.empate[Math.floor(Math.random() * placares.empate.length)];
      resultadoDuelo = `A partida terminou empatada! O placar foi ${placarEmpate}`;
    } else if (overallFinalEquipe1 > overallFinalEquipe2) {
      const placar =
        placares.vitoria[Math.floor(Math.random() * placares.vitoria.length)];
      resultadoDuelo = `${equipe1.nome} venceu! O placar foi ${placar}`;
    } else {
      const placar =
        placares.derrota[Math.floor(Math.random() * placares.derrota.length)];
      resultadoDuelo = `${equipe2.nome} venceu! O placar foi ${placar}`;
    }

    setResultado(resultadoDuelo);
  };

  const handleDrop = (
    e: DragEvent<HTMLDivElement>,
    setEquipe: (equipe: Equipe) => void
  ) => {
    const equipeId = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const equipe = equipes.find((e) => e.id === equipeId);

    if (!equipe || equipe.titulares.length !== NUMERO_DE_TITULARES) {
      alert("Número de titulares inválido!");
      return;
    }

    setEquipe(equipe);
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
    const blocosParaCompletar =
      NUMERO_DE_TITULARES - (equipe.titulares?.length || 0);

    return (
      <div
        id={sectionId}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, setEquipe)}
        className="w-1/2 min-h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">
          {equipe.nome || (sectionId === "section1" ? "Time 01" : "Time 02")}
        </h2>
        <p className="text-center">
          Overall: {Math.round(calcularOverall(equipe))}
        </p>

        {equipe.titulares?.map((jogador) => (
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
              <span>{jogador.numero}</span>
              <span>{jogador.apelido}</span>
            </div>
            <span>{jogador.posicoes.nome}</span>
            <span className="w-10">{Math.round(jogador.overall)}</span>
          </div>
        ))}

        {Array.from({ length: blocosParaCompletar }).map((_, index) => (
          <div key={index} className="p-2 h-10 bg-white border rounded mt-2" />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-7">
      <div className="flex gap-36 justify-around mt-8 relative">
        <CardDuelo
          equipe={equipe1}
          sectionId="section1"
          setEquipe={setEquipe1}
        />

        <button
          disabled={!equipe1.id || !equipe2.id}
          onClick={onDuelar}
          className="bg-emerald-800 p-6 rounded-full hover:bg-green-900 text-white font-semibold text-xl absolute translate-y-1/2 top-1/2 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Duelar
        </button>

        <CardDuelo
          equipe={equipe2}
          sectionId="section2"
          setEquipe={setEquipe2}
        />
      </div>

      {resultado && (
        <div className="w-full min-h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded">
          <h2 className="lg:mb-8 text-5xl text-center font-bold">
            Resultado do Duelo
          </h2>
          <p className="lg:mb-8 text-3xl text-center font-bold">{resultado}</p>
        </div>
      )}
    </div>
  );
};
