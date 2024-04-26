"use client";

import { ListaEquipes } from "@/components/ListaEquipes";
import { useEquipes } from "@/hooks/useEquipes";

export default function Equipes() {
  const { data: equipes } = useEquipes();
  return <ListaEquipes equipes={equipes} />;
}
