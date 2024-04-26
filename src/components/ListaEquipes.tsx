import { Equipe } from "@/types/equipe";
import Image from "next/image";

interface ListaEquipesProps {
  equipes: Equipe[];
}

export const ListaEquipes = (props: ListaEquipesProps) => {
  const { equipes } = props;

  function retornaCoresCadastradas(cores: string[]) {
    console.log("Cores recebidas:", cores);
    if (cores.length === 1) {
      return `bg-[${cores[0]}]`;
    }

    if (cores.length === 2) {
      return `bg-gradient-to-b from-[${cores[0]}] to-[${cores[1]}]`;
    }

    if (cores.length === 3) {
      return `bg-gradient-to-b from-[${cores[0]}] via-[${cores[1]}] to-[${cores[2]}]`;
    }

    return "bg-[#ccc]";
  }

  return (
    <ul className="flex flex-wrap gap-8 p-20">
      {equipes.map((equipe) => (
        <li
          className={`bg-opacity-50  max-w-sm rounded overflow-hidden shadow-lg ${retornaCoresCadastradas(
            equipe.cores
          )} p-4`}
          key={equipe.id}
          data-cores={equipe.cores.length}
        >
          <Image
            className="w-full"
            src={`http://127.0.0.1:8000/static/game/media/uploads/${equipe.foto}`}
            alt={`foto do escudo`}
            width={300}
            height={300}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{equipe.nome}</div>
            <p className="text-gray-700 text-base mb-2">
              Fundado em : {equipe.fundacao}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Estadio: {equipe.estadio}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Cores da Equipe: {equipe.cores}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
