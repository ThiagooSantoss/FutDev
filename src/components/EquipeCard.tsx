"use client";

import { Equipe } from "@/types/equipe";
import { converteDataFull } from "@/utils/converteDataFull";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { CardJogadorPopover } from "./CardJogadorPopover";

interface EquipeCardProps {
  equipe: Equipe;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

export const EquipeCard: React.FC<EquipeCardProps> = (
  props: EquipeCardProps
) => {
  const { equipe, onDragStart } = props;

  const { cores = [], estadio, foto, fundacao, nome } = equipe;

  const [virado, setVirado] = useState(false);
  const [vendoJogadores, setVendoJogadores] = useState(false);

  function retornaCoresCadastradas(cores: string[]) {
    if (cores.length === 1) {
      return { backgroundColor: cores[0] };
    }

    if (cores.length === 2) {
      return {
        backgroundImage: `linear-gradient(to bottom, ${cores[0]}, ${cores[1]})`,
      };
    }

    if (cores.length === 3) {
      return {
        backgroundImage: `linear-gradient(to bottom, ${cores[0]}, ${cores[1]}, ${cores[2]})`,
      };
    }

    return { backgroundColor: "#ccc" };
  }

  function retornaHeight() {
    if (vendoJogadores) return "h-[600px]";
    if (virado) return "h-[450px]";
    return "h-[300px]";
  }

  const dataFormatada = converteDataFull(fundacao);

  return (
    <li
      className={`group h-fit [perspective:1000px] ${
        vendoJogadores ? "z-[1000]" : "z-0"
      }`}
      onClick={() => {
        setVirado(!virado);
        setVendoJogadores(false);
      }}
    >
      <div
        draggable="true"
        onDragStart={(e) => onDragStart(e, equipe.id)}
        className={`flex items-center content-center cursor-pointer relative w-[256px] rounded-xl shadow-xl [transform-style:preserve-3d] ${
          virado ? "[transform:rotateY(180deg)]" : ""
        } p-8 ${retornaHeight()} transition-all duration-700 ease-in-out`}
        style={retornaCoresCadastradas(cores)}
      >
        <Image
          className="[backface-visibility:hidden] object-cover w-full rounded-t-lg h-56 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`http://127.0.0.1:8000/static/game/media/uploads/${foto}`}
          alt={`foto do escudo`}
          width={250}
          height={250}
        />

        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/20 text-white px-12 text-center-text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <div
              className={`flex flex-col ${
                vendoJogadores ? "mt-10" : ""
              } items-center text-white h-full`}
            >
              <AnimatePresence>
                {vendoJogadores ? (
                  <motion.div
                    transition={{
                      duration: 1,
                      delay: 0.4,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="flex flex-col items-center justify-center mb-6 w-full"
                  >
                    <div className="flex content-center items-center gap-6 w-full">
                      <div className="w-full m-5">
                        <h6 className="font-bold text-2xl mb-2">Titulares</h6>
                        <ul className="flex flex-col gap-2 text-left mb-4">
                          {equipe.titulares.map((jogador) => (
                            <CardJogadorPopover
                              key={jogador.id}
                              jogador={jogador}
                            >
                              <li>{jogador.apelido}</li>
                            </CardJogadorPopover>
                          ))}
                        </ul>
                        <h6 className="font-bold text-2xl mb-2">Reservas</h6>
                        <ul className="text-left mb-4">
                          {equipe.reservas.map((jogador) => (
                            <CardJogadorPopover
                              key={jogador.id}
                              jogador={jogador}
                            >
                              <li>{jogador.apelido}</li>
                            </CardJogadorPopover>
                          ))}
                        </ul>
                        <h6 className="font-bold text-2xl mb-2">Treinador</h6>
                        <span className="block mb-4">{equipe.treinador.apelido}</span>
                      </div>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVendoJogadores(false);
                      }}
                    >
                      Voltar
                    </Button>
                  </motion.div>
                ) : (
                  <Fragment>
                    {estadio?.foto && (
                      <Image
                        className="[backface-visibility:hidden] object-cover w-full rounded-t-lg h-full max-h-48"
                        src={`http://127.0.0.1:8000/static/game/media/uploads/${estadio.foto}`}
                        alt={`foto do estádio`}
                        width={250}
                        height={250}
                      />
                    )}

                    <p className="font-bold text-base mb-2 mt-4">{nome}</p>
                    <p className="text-sm mb-2">Fundado em: {dataFormatada}</p>
                    <p className="text-sm mb-2">Estádio: {estadio?.nome}</p>
                    <p className="text-sm mb-2">Local: {estadio?.local}</p>
                    <p className="text-sm mb-2">
                      Capacidade: {estadio?.capacidade.toLocaleString("pt-BR")}
                    </p>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVendoJogadores(true);
                      }}
                      className="mt-4"
                    >
                      Ver Jogadores
                    </Button>
                  </Fragment>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
