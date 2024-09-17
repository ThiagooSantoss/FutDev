import { Jogador } from "./jogador";
import { Estadio } from "./estadio";
import { Treinador } from "./treinador";

export interface Equipe {
  id: number;
  escudo: string;
  foto: string;
  nome: string;
  fundacao: string;
  treinador: Treinador;
  estadio: Estadio;
  cores: string[];
  titulares: Jogador[];
  reservas: Jogador[];
  overall?: number;
}
