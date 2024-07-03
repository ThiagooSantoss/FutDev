import React from "react";
import WorldFlag from "react-world-flags";
import Image from "next/image";
import cardJogador from "../../public/cardJogador.png";
import { Habilidades, Jogador } from "@/types/jogador";

interface JogadorCardProps {
  jogador: Jogador;
}

export const JogadorCard = (props: JogadorCardProps) => {
  const { jogador } = props;

  const nacionalidade = jogador.nacionalidade
    ? jogador.nacionalidade
    : "Nacionalidade não definida";

  const habilidades = jogador.habilidades;
  const habilidadesKeys = Object.keys(habilidades);

  function simplificaNomeHabilidade(nomeHabilidade: string) {
    return nomeHabilidade.slice(0, 3).toUpperCase();
  }

  return (
    <div className="relative">
      <Image
        src={cardJogador}
        alt={"Card do jogador"}
        width={400}
        height={400}
      />

      <Image
        className="absolute top-16 left-1/2 -translate-x-1/2 rounded-full"
        src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
        alt={`foto do jogador ${jogador.apelido}`}
        width={200}
        height={200}
      />

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-64 h-36">
        <div className="font-bold text-3xl mb-2 text-center text-[#4f3422]">
          {jogador.apelido}
        </div>
        <div className="flex items-center gap-1 justify-center">
          <span className="text-xl text-[#4f3422] ">OVR</span>
          <span className="font-extrabold text-2xl text-[#4f3422]">
            {Math.round(jogador.overall)}
          </span>
        </div>
        <div className="flex justify-between">
          {habilidadesKeys.map((nomeHabilidade) => (
            <div key={nomeHabilidade} className="flex flex-col items-center">
              <span className="text-xl text-[#4f3422] mt-2">
                {simplificaNomeHabilidade(nomeHabilidade)}
              </span>

              <span className="font-extrabold text-2xl text-[#4f3422] mt-1">
                {habilidades[nomeHabilidade as keyof Habilidades]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-2">
          <WorldFlag width={30} height={30} code={nacionalidade} />

          <Image
            className="ml-2"
            src={`http:127.0.0.1:8000/static/game/media/uploads/${jogador.url_escudo}`}
            alt={`foto do escudo`}
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
