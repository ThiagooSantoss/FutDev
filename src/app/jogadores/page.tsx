import { ListaJogadores } from "@/components/ListaJogadores";

export default function Jogadores() {
  return (
    <ListaJogadores
      jogadores={[
        {
          nome: "Messi",
          numeroCamisa: 10,
          pePreferido: "esquerdo",
          posicoes: ["Meia-esquerda", "Atacante"],
        },
        {
          nome: "Cristiano",
          numeroCamisa: 7,
          pePreferido: "direito",
          posicoes: ["Atacante"],
        },
      ]}
    />
  );
}
