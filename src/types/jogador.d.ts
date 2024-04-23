import { Habilidade } from "./habilidade";

export interface Jogador {
  id: number;
  nome: string;
  sobrenome: string;
  apelido: string;
  nasc: string;
  avatar: string;
  foto: string;
  equipe: string;
  habilidades: Habilidade[];
  posicoes: string[];
}
