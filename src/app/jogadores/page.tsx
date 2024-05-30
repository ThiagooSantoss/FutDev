"use client";

import { ListaJogadores } from "@/components/ListaJogadores";
import { useJogadores } from "@/hooks/useJogadores";

export default function Jogadores() {
  const { data: jogadores } = useJogadores();
  return <ListaJogadores jogadores={jogadores} />;
}
