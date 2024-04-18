"use client";
import { ListaJogadores } from "@/components/ListaJogadores";
import { api } from "@/services/api";
import { Jogador } from "@/types/jogador";
import { AxiosResponse } from "axios";
import { useState } from "react";

export default function Jogadores() {
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  async function getJogadores() {
    const { data }: AxiosResponse<Jogador[]> = await api.get("jogador");
    setJogadores(data);
  }

  getJogadores();
  return <ListaJogadores jogadores={jogadores} />;
}
