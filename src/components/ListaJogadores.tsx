import { Jogador } from "@/types/jogador";
import { JogadorCard } from "./JogadorCard";

interface ListaJogadoresProps {
  jogadores: Jogador[];
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
