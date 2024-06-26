import { api } from "@/services/api";
import { Paises } from "@/types/pais";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const PAIS_KEY = "pais";

async function getPaises(): Promise<Paises[]> {
  const { data }: AxiosResponse<Paises[]> = await api.get("paises");

  return data;
}

export function usePaises() {
  return useQuery({
    queryKey: [PAIS_KEY],
    queryFn: getPaises,
    initialData: [],
  });
}
