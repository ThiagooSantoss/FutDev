import { api } from "@/services/api";
import { Jogador, JogadorComHabilidade } from "@/types/jogador";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const JOGADORES_KEY = "jogadores";

async function getJogadores(): Promise<JogadorComHabilidade[]> {
  const { data }: AxiosResponse<JogadorComHabilidade[]> = await api.get("habilidades/2");
  // data.forEach((jogador) => {
  //   if (jogador.habilidades.length === 0) {
  //     jogador.habilidades.push({
  //       chute: 0,
  //       passe: 0,
  //       corrida: 0,
  //       dominio: 0,
  //       cruzamento: 0,
  //     });
  //   }
  // });
console.log([data]);

  return [data];
}

export function useJogadores() {
  return useQuery({
    queryKey: [JOGADORES_KEY],
    queryFn: getJogadores,
    initialData: [],
  });
}
