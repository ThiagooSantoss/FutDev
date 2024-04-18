import { Jogador } from "@/types/jogador";


interface ListaJogadoresProps {
  jogadores: Jogador[];
}
export const ListaJogadores = (props: ListaJogadoresProps) => {
  const { jogadores } = props;

  return (
    <ul className="flex gap-8">
      {jogadores.map((jogador) => (
        <li key={jogador.nome}>
          <p>{jogador.id}</p>
          <p>{jogador.nome}</p>
          <p>{jogador.sobrenome}</p>
          <p>{jogador.apelido}</p>
          <p>{jogador.nasc}</p>
          <p>{jogador.avatar}</p>
          <p>{jogador.equipe}</p>
          <p>{jogador.posicoes.join(", ")}</p>
        </li>
      ))}
    </ul>
  );
};
