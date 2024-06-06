import { Jogador } from "./jogador";
import { Estadio } from "./estadio";

interface Escalacao {
  titulares: string[];
  reservas: string[];
}
export interface Equipe {
  id: number;
  escudo: string;
  foto: string;
  nome: string;
  fundacao: string;
  estadio: Estadio;
  cores: string[];
  escalacao: Escalacao[];
}
