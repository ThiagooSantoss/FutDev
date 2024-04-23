import { Jogador } from "@/types/jogador";
import Image from "next/image";

interface ListaJogadoresProps {
  jogadores: Jogador[];
}
export const ListaJogadores = (props: ListaJogadoresProps) => {
  const { jogadores } = props;

  return (
    <ul className="flex flex-wrap gap-8 p-20">
      {jogadores.map((jogador) => (
        <li
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={jogador.nome}
        >
          <Image
            className="w-full"
            src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`}
            alt={`foto do jogador ${jogador.nome}`}
            width={300}
            height={300}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {jogador.nome} {jogador.sobrenome}
            </div>
            <p className="text-gray-700 text-base mb-2">
              Apelido: {jogador.apelido}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Data de Nascimento: {jogador.nasc}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Equipe: {jogador.equipe}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Habilidade: {jogador.habilidades[0].chute}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Posições: {jogador.posicoes.join(", ")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
