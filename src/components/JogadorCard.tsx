import React from "react";
import Image from "next/image";
import cardJogador from "../../public/cardJogador.png";
import { Habilidades, Jogador } from "@/types/jogador";
import ReactCountryFlag from "react-country-flag";

interface JogadorCardProps {
  jogador: Jogador;
  tamanho?: "sm" | "md" | "lg";
}

export const JogadorCard = (props: JogadorCardProps) => {
  const { jogador, tamanho = "lg" } = props;

  const habilidades = jogador.habilidades;
  const habilidadesKeys = Object.keys(habilidades);

  function simplificaNomeHabilidade(nomeHabilidade: string) {
    return nomeHabilidade.slice(0, 3).toUpperCase();
  }

  let width = 0;

  if (tamanho === "sm") {
    width = 150;
  } else if (tamanho === "md") {
    width = 300;
  } else {
    width = 400;
  }

  return (
    <div className="relative">
      <Image
        src={cardJogador}
        alt={"Card do jogador"}
        width={width}
        height={400}
      />

      <Image
        className="absolute top-[46px] left-56 -translate-x-1/2"
        src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
        alt={`foto do jogador ${jogador.apelido}`}
        width={250}
        height={250}
      />

      <div className="absolute top-24 left-14 flex flex-col items-center gap-1 justify-center">
        <span className="text-2xl text-[#4f3422]">OVR</span>
        <span className="font-extrabold text-5xl text-[#4f3422]">
          {Math.round(jogador.overall)}
        </span>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-80">
        <div className="font-bold text-3xl mb-2 text-center text-[#4f3422]">
          {jogador.apelido}
        </div>

        <div className="flex justify-between">
          {habilidadesKeys.map((nomeHabilidade) => (
            <div key={nomeHabilidade} className="flex flex-col items-center">
              <span className="text-xl text-[#4f3422] mt-2">
                {simplificaNomeHabilidade(nomeHabilidade)}
              </span>

              <span className="font-extrabold text-3xl text-[#4f3422] mt-1">
                {habilidades[nomeHabilidade as keyof Habilidades]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-center mt-2">
          <ReactCountryFlag
            className="text-5xl"
            countryCode={jogador.nacionalidade}
            svg
          />

          <Image
            src={`http:127.0.0.1:8000/static/game/media/uploads/${jogador.url_escudo}`}
            alt={`foto do escudo`}
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};
