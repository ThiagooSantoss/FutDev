import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function converteDataFull(data: string) {
  try {
    const dataFormatada = format(data, "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });

    return dataFormatada;
  } catch {
    return data;
  }
}
