"use client";

import React from "react";
import { ListaPaises } from "@/components/ListaPaises"; 
import { usePaises } from "@/hooks/usePaises";

export default function Paises() { 
  const { data: paises } = usePaises();
  return <>
  {paises.map((pais) => (
    <ListaPaises key={pais.codigo_iso} codigo_iso={pais.codigo_iso} />
  ))}
</>
}
