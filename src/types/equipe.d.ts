import { Jogador } from "./jogador";
import { Estadio } from "./estadio";

export interface Equipe {
  id: number;
  escudo: string;
  foto: string;
  nome: string;
  fundacao: string;
  treinador: string;
  estadio: Estadio;
  cores: string[];
  titulares: string[];
  reservas: string[];
}
