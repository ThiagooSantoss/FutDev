import { JogadorComHabilidade } from "@/types/jogador";
import { JogadorCard } from "./JogadorCard";

interface ListaJogadoresProps {
  jogadores: JogadorComHabilidade[];
}
export const ListaJogadores = (props: ListaJogadoresProps) => {
  const { jogadores } = props;

  return (
    <ul className="flex flex-wrap gap-8 p-20">
      {jogadores.map((jogador) => (
        <JogadorCard key={jogador.id} jogador={jogador} />
      ))}
    </ul>
  );
};
