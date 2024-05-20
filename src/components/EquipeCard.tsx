import { Equipe } from "@/types/equipe";
import { converteDataFull } from "@/utils/converteDataFull";
import Image from "next/image";
import { useState } from "react";

interface EquipeCardProps {
  equipe: Equipe;
}

export const EquipeCard = (props: EquipeCardProps) => {
  const { equipe } = props;
  const [virado, setVirado] = useState(false);

  const { cores, estadio, foto, fundacao, nome } = equipe;

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

  const handleClick = () => {
    setVirado(!virado); // Alternar entre virado e não virado quando clicado
  };

  return (
    <li
      className={`bg-opacity-50 max-w-sm rounded overflow-hidden shadow-lg
         hover:shadow-zinc-400 hover:shadow-xl cursor-pointer transition-all h-fit
         ${virado ? 'transform rotate-y-180' : ''}`}
      onClick={handleClick} // Adiciona o manipulador de evento de clique
    >
      <div className="p-8" style={retornaCoresCadastradas(cores)}>
        <div className="flex justify-center items-center h-full">
          {virado ? (
            <div>
              <p className="font-bold text-xl mb-2">{nome}</p>
              <p className="text-gray-700 text-base mb-2">Fundado em: {dataFormatada}</p>
              <p className="text-gray-700 text-base mb-2">Estádio: {estadio}</p>
            </div>
          ) : (
            <Image
              className="w-full"
              src={`http://127.0.0.1:8000/static/game/media/uploads/${foto}`}
              alt={`foto do escudo`}
              width={300}
              height={300}
            />
          )}
        </div>
      </div>
    </li>
  );
};


