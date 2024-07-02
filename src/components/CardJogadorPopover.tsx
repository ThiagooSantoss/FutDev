import { Jogador } from "@/types/jogador";
import { Popover } from "flowbite-react";
import React, { FC, ReactNode } from "react";
import { JogadorCard } from "./JogadorCard";

interface MinhaPopoverProps {
  children: ReactNode;
  jogador: Jogador;
}

export const CardJogadorPopover: FC<MinhaPopoverProps> = ({
  children,
  jogador,
}) => {
  return (
    <Popover
      trigger="hover"
      arrow={false}
      theme={{
        base: "bg-none w-[400px] h-[558px]",
      }}
      content={<JogadorCard jogador={jogador} />}
   
    >
      {children}
    </Popover>
  );
};
