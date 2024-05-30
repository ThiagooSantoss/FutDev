import { Jogador } from "./jogador";
import { Estadio } from "./estadio";

export interface Equipe {
  id: number;
  escudo: string;
  foto: string;
  nome: string;
  fundacao: string;
  estadio: Estadio;
  cores: string[];
  jogadores: Jogador[];
}
