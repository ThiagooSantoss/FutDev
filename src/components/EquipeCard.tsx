import { Equipe } from "@/types/equipe";
import { converteDataFull } from "@/utils/converteDataFull";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";

interface EquipeCardProps {
  equipe: Equipe;
}

export const EquipeCard = (props: EquipeCardProps) => {
  const { equipe } = props;

  const { cores, estadio, foto, fundacao, nome } = equipe;

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

  const dataFormatada = converteDataFull(fundacao);

  return (
    <li
      className={`group h-fit [perspective:1000px]`}
      onClick={() => {
        setVirado(!virado);
        setVendoJogadores(false);
      }}
    >
      <div
        className={`flex items-center content-center cursor-pointer relative w-full rounded-xl shadow-xl [transform-style:preserve-3d] ${
          virado ? "[transform:rotateY(180deg)]" : ""
        } p-8 ${
          vendoJogadores ? "h-[600px]" : "h-[300px]"
        } transition-all duration-700 ease-in-out`}
        style={retornaCoresCadastradas(cores)}
      >
        <Image
          className="[backface-visibility:hidden]"
          src={`http://127.0.0.1:8000/static/game/media/uploads/${foto}`}
          alt={`foto do escudo`}
          width={250}
          height={250}
        />

        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/20 text-white px-12 text-center-text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <div
              className={`flex flex-col ${
                vendoJogadores ? "mt-10" : "justify-center"
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
                    className="flex flex-col items-center justify-center mb-6"
                  >
                    <div className="flex content-center items-center gap-6">
                      <div className="w-full">
                        <h6 className="font-bold text-4xl mb-2">Titulares</h6>

                        <ul className="text-left h-[350px]">
                          {/* Remover quando tiver os reservas
                          <ul className="text-left border-r border-slate-500 h-[350px]"> 
                         */}
                          {equipe.jogadores.map((jogador) => (
                            <li key={jogador.id} className="text-xl">
                              {jogador.apelido}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <div className="w-full">
                        <h6 className="font-bold text-4xl mb-2">Reservas</h6>

                        <ul className="text-left h-[350px]">
                          <li className="text-xl">1 - Rogério Ceni</li>
                          <li className="text-xl">2 - Dedé</li>
                          <li className="text-xl">3 - Fagner</li>
                          <li className="text-xl">4 - Roberto Carlos</li>
                          <li className="text-xl">5 - Casemiro</li>
                          <li className="text-xl">6 - De Bruyne</li>
                          <li className="text-xl">7 - Tony Kross</li>
                          <li className="text-xl">8 - Renato Augusto</li>
                          <li className="text-xl">9 - Lionel Messi</li>
                          <li className="text-xl">10 - Deyverson</li>
                          <li className="text-xl">11 - Ronaldo</li>
                        </ul>
                      </div> */}
                    </div>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setVendoJogadores(false);
                      }}
                      className="mt-4 mx-auto"
                    >
                      Voltar
                    </Button>
                  </motion.div>
                ) : (
                  <Fragment>
                    <p className="font-bold text-xl mb-2">{nome}</p>
                    <p className="text-base mb-2">
                      Fundado em: {dataFormatada}
                    </p>
                    <p className="text-base mb-2">Estádio: {estadio}</p>

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
