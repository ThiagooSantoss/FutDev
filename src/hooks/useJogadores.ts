import { api } from "@/services/api";
import { Jogador } from "@/types/jogador";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const JOGADORES_KEY = "jogadores";

async function getJogadores(): Promise<Jogador[]> {
  const { data }: AxiosResponse<Jogador[]> = await api.get("habilidades");
  data.forEach((jogador) => {
    if ((jogador.habilidades.length === 0)) {
      jogador.habilidades.push({
        id: 0,
        chute: 0,
        passe: 0,
        corrida: 0,
        dominio: 0,
        jogador: 0,
        cruzamento: 0,
      });
    }
  });

  return data;
}

export function useJogadores() {
  return useQuery({
    queryKey: [JOGADORES_KEY],
    queryFn: getJogadores,
    initialData: [],
  });
}
