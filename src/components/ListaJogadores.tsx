import { Jogador } from "@/types/jogador";
import Image from "next/image";


interface ListaJogadoresProps {
  jogadores: Jogador[];
}
export const ListaJogadores = (props: ListaJogadoresProps) => {
  const { jogadores } = props;

  return (
    <ul className="flex gap-8">
      {jogadores.map((jogador) => (
        <li key={jogador.nome}>
          <Image width={300} height={300} src={`http://127.0.0.1:8000/static/game/media/uploads/${jogador.foto}`} alt={`foto do jogador ${jogador.nome}`} />
          <p>{jogador.id}</p>
          <p>{jogador.nome}</p>
          <p>{jogador.sobrenome}</p>
          <p>{jogador.apelido}</p>
          <p>{jogador.nasc}</p>
          <p>{jogador.equipe}</p>
          <p>{jogador.posicoes.join(", ")}</p>
        </li>
      ))}
    </ul>
  );
};
