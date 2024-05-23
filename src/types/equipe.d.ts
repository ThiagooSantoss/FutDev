import { Jogador } from "./jogador";

export interface Equipe {
  id: number;
  escudo: string;
  foto: string;
  nome: string;
  fundacao: string;
  estadio: string;
  cores: string[];
  jogadores: Jogador[];
}
