import { CSSProperties } from "react";

interface StylesObjType {
  [key: string]: CSSProperties;
}

export const tamanhoMapper = {
  sm: {
    width: 200,
    height: 280,
  },
  md: {
    width: 300,
    height: 420,
  },
  lg: {
    width: 400,
    height: 560,
  },
};

export const computarStylesObj = (
  tamanho: "sm" | "md" | "lg"
): StylesObjType => {
  return {
    imagemJogador: {
      left: `calc(${tamanhoMapper[tamanho].width}px * 0.6)`,
      top: `calc(${tamanhoMapper[tamanho].height}px * 0.1)`,
    },
    overallContainer: {
      left: `calc(${tamanhoMapper[tamanho].width}px * 0.15)`,
      top: `calc(${tamanhoMapper[tamanho].height}px * 0.15)`,
    },
    ovrLabel: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.09)`,
    },
    ovrValor: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.12)`,
    },
    informacoesContainer: {
      left: `calc(${tamanhoMapper[tamanho].width}px * 0.5)`,
      top: `calc(${tamanhoMapper[tamanho].height}px * 0.55)`,
      width: `calc(${tamanhoMapper[tamanho].width}px * 0.75)`,
    },
    nomeJogador: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.09)`,
      marginTop: `calc(${tamanhoMapper[tamanho].height}px * 0.01)`,
    },
    habilidadesContainer: {
      margin: `calc(${tamanhoMapper[tamanho].width}px * 0.05) 0`,
    },
    nomeHabilidade: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.055)`,
      marginTop: `calc(${tamanhoMapper[tamanho].height}px * 0.03)`,
    },
    valorHabilidade: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.08)`,
      marginTop: `calc(${tamanhoMapper[tamanho].width}px * 0.02)`,
    },
    pais: {
      fontSize: `calc(${tamanhoMapper[tamanho].width}px * 0.1)`,
    },
  };
};
