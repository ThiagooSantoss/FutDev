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
  posicoes: string[];
  url_escudo: string;
  pais: string;
  codigo_iso: string;
  nacionalidade: string;
}

export interface JogadorComHabilidade extends Jogador {
  habilidades: Habilidade[];
}
