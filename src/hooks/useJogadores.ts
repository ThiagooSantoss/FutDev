import { api } from "@/services/api";
import { Jogador } from "@/types/jogador";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const JOGADORES_KEY = "jogadores";

async function getJogadores(): Promise<Jogador[]> {
  const { data }: AxiosResponse<Jogador[]> = await api.get("jogador");
  return data;
}

export function useJogadores() {
  return useQuery({
    queryKey: [JOGADORES_KEY],
    queryFn: getJogadores,
    initialData: [],
  });
}
