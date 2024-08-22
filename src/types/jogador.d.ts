export interface Jogador {
  id: number;
  nome: string;
  sobrenome: string;
  apelido: string;
  nasc: string;
  avatar: string;
  foto: string;
  equipe: string;
  posicoes: Posicoes;
  url_escudo: string;
  pais: string;
  codigo_iso: string;
  nacionalidade: string;
  habilidades: Habilidades;
  overall: number;
  numero: number;
}

export interface Habilidades {
  ritmo: number;
  finalizacao: number;
  passe: number;
  conducao: number;
  defesa: number;
  fisico: number;
}


export interface Posicoes {
  nome: string;
  grupo: string;
}
