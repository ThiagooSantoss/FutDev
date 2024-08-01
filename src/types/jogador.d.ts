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
  habilidades: Habilidades;
  overall: number;
  numero: number;
}

export interface Habilidades {
  chute: number;
  passe: number;
  dominio: number;
  corrida: number;
  cruzamento: number;
}
