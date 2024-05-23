"use client";

import { EquipeCard } from "@/components/EquipeCard";
import { useEquipes } from "@/hooks/useEquipes";

export default function Equipes() {
  const { data: equipes } = useEquipes();

  return (
    <div className="h-svh bg-zinc-50 p-20">
      <ul className="flex flex-wrap gap-8">
        {equipes.map((equipe) => (
          <EquipeCard key={equipe.id} equipe={equipe} />
        ))}
      </ul>
    </div>
  );
}
