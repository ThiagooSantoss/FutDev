import { ListaJogadores } from "@/components/ListaJogadores";
import { Jogador } from "@/types/jogador";
import { fetchWrapper } from "@/utils/fetchWrapper";

export default async function Jogadores() {
  const response = await fetchWrapper<Jogador[]>("jogadores");

  return <ListaJogadores jogadores={response.data} />;
}
