import { Equipe } from "@/types/equipe";
import { converteDataFull } from "@/utils/converteDataFull";
import Image from "next/image";

interface EquipeCardProps {
  equipe: Equipe;
}

export const EquipeCard = (props: EquipeCardProps) => {
  const { equipe } = props;

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

  return (
    <li
      className={`bg-opacity-50 max-w-sm rounded overflow-hidden shadow-lg
         hover:shadow-zinc-400 hover:shadow-xl cursor-pointer transition-all h-fit
      `}
    >
      <div className="p-8" style={retornaCoresCadastradas(cores)}>
        <Image
          className="w-full"
          src={`http://127.0.0.1:8000/static/game/media/uploads/${foto}`}
          alt={`foto do escudo`}
          width={300}
          height={300}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nome}</div>
        <p className="text-gray-700 text-base mb-2">
          Fundado em: {dataFormatada}
        </p>
        <p className="text-gray-700 text-base mb-2">Estádio: {estadio}</p>
      </div>
    </li>
  );
};
