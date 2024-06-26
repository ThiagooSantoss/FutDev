import { api } from "@/services/api";
import { Equipe } from "@/types/equipe";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const EQUIPE_KEY = "equipes";

async function getEquipes(): Promise<Equipe[]> {
  const { data }: AxiosResponse<Equipe[]> = await api.get("equipes");

  return data;
}

export function useEquipes() {
  return useQuery({
    queryKey: [EQUIPE_KEY],
    queryFn: getEquipes,
    initialData: [],
  });
}
