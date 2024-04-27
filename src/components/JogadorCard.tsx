import { Jogador } from "@/types/jogador";
import Image from "next/image";

import cardJogador from "../../public/cardJogador.png";
import { Habilidade } from "@/types/habilidade";

interface JogadorCardProps {
  jogador: Jogador;
}

export const JogadorCard = (props: JogadorCardProps) => {
  const { jogador } = props;

  const habilidadesKeys = Object.keys(jogador.habilidades[0]);

  const nomesHabilidades = habilidadesKeys.map((habilidade) =>
    habilidade.slice(0, 3).toUpperCase()
  );

  return (
    <li className="relative">
      <Image
        src={cardJogador}
        alt={"Card do jogador"}
        width={400}
        height={400}
      />

      <Image
        className="absolute top-16 left-1/2 -translate-x-1/2 rounded-full"
        src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
        alt={`foto do jogador ${jogador.nome}`}
        width={200}
        height={200}
      />

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 bg-red-50 w-64 h-36">
        <div className="font-bold text-3xl mb-2 text-center">
          {jogador.apelido}
        </div>

        <div className="flex justify-evenly">
          {nomesHabilidades.map((nomeHabilidade) => (
            <div key={nomeHabilidade} className="flex flex-col items-center">
              <span className="font-bold">{nomeHabilidade}</span>

              <span className="font-extrabold text-xl"></span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );

  // return (
  //   <li className="max-w-sm rounded overflow-hidden shadow-lg">
  //     <Image
  //       className="w-full"
  //       src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
  //       alt={`foto do jogador ${jogador.nome}`}
  //       width={300}
  //       height={300}
  //     />
  //     <div className="px-6 py-4">
  //       <div className="font-bold text-xl mb-2">
  //         {jogador.nome} {jogador.sobrenome}
  //       </div>
  //       <p className="text-gray-700 text-base mb-2">
  //         Apelido: {jogador.apelido}
  //       </p>
  //       <p className="text-gray-700 text-base mb-2">
  //         Data de Nascimento: {jogador.nasc}
  //       </p>
  //       <p className="text-gray-700 text-base mb-2">Equipe: {jogador.equipe}</p>
  //       <p className="text-gray-700 text-base mb-2">
  //         Habilidade: {jogador.habilidades[0].chute}
  //       </p>
  //       <p className="text-gray-700 text-base mb-2">
  //         Posições: {jogador.posicoes.join(", ")}
  //       </p>
  //     </div>
  //   </li>
  // );
};
