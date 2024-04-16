interface Jogador {
  nome: string;
  pePreferido: "direito" | "esquerdo";
  numeroCamisa: number;
  posicoes: string[];
}

interface ListaJogadoresProps {
  jogadores: Jogador[];
}
export const ListaJogadores = (props: ListaJogadoresProps) => {
  const { jogadores } = props;

  return (
    <ul className="flex gap-8">
      {jogadores.map((jogador) => (
        <li key={jogador.nome}>
          <p>{jogador.nome}</p>
          <p>{jogador.numeroCamisa}</p>
          <p>{jogador.pePreferido}</p>
          <p>{jogador.posicoes.join(", ")}</p>
        </li>
      ))}
    </ul>
  );
};
