import React from "react";
import Image from "next/image";
import cardJogador from "../../../public/cardJogador.png";
import { Habilidades, Jogador } from "@/types/jogador";
import ReactCountryFlag from "react-country-flag";
import { computarStylesObj, tamanhoMapper } from "./constants";

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

  const stylesObj = computarStylesObj(tamanho);

  return (
    <div className="relative">
      <Image
        src={cardJogador}
        alt={"Card do jogador"}
        width={tamanhoMapper[tamanho].width}
        height={tamanhoMapper[tamanho].height}
      />

      <Image
        className={`absolute top-[46px] -translate-x-1/2`}
        src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
        alt={`foto do jogador ${jogador.apelido}`}
        width={tamanhoMapper[tamanho].width * 0.6}
        height={tamanhoMapper[tamanho].height * 0.6}
        style={stylesObj.imagemJogador}
      />

      <div
        className="absolute flex flex-col items-center justify-center"
        style={stylesObj.overallContainer}
      >
        <span className="text-2xl text-[#4f3422]" style={stylesObj.ovrTexto}>
          OVR
        </span>

        <span
          className="font-extrabold text-[#4f3422]"
          style={stylesObj.ovrValor}
        >
          {Math.round(jogador.overall)}
        </span>
      </div>

      <div
        className="absolute -translate-x-1/2"
        style={stylesObj.informacoesContainer}
      >
        <p
          className="font-bold text-center text-[#4f3422] leading-none"
          style={stylesObj.nomeJogador}
        >
          {jogador.apelido}
        </p>

        <div
          className="flex justify-between"
          style={stylesObj.habilidadesContainer}
        >
          {habilidadesKeys.map((nomeHabilidade) => (
            <div key={nomeHabilidade} className="flex flex-col items-center">
              <span
                className="text-xl text-[#4f3422] leading-none"
                style={stylesObj.nomeHabilidade}
              >
                {simplificaNomeHabilidade(nomeHabilidade)}
              </span>

              <span
                className="font-extrabold text-3xl text-[#4f3422] leading-none"
                style={stylesObj.valorHabilidade}
              >
                {habilidades[nomeHabilidade as keyof Habilidades]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-center">
          <ReactCountryFlag
            countryCode={jogador.nacionalidade}
            svg
            style={stylesObj.pais}
          />

          <Image
            src={`http:127.0.0.1:8000/static/game/media/uploads/${jogador.url_escudo}`}
            alt={`foto do escudo`}
            width={tamanhoMapper[tamanho].width * 0.12}
            height={tamanhoMapper[tamanho].height * 0.12}
          />
        </div>
      </div>
    </div>
  );
};
