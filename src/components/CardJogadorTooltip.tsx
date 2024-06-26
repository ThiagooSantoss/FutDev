import { Jogador } from "@/types/jogador";
import { Tooltip, TooltipProps } from "flowbite-react";
import React, { FC, ReactNode } from "react";
import { JogadorCard } from "./JogadorCard";

interface MinhaTooltipProps {
  children: ReactNode;
  jogador: Jogador;
  tooltipProps?: TooltipProps;
}

export const CardJogadorTooltip: FC<MinhaTooltipProps> = ({
  children,
  jogador,
  tooltipProps,
}) => {
  return (
    <Tooltip
      arrow={false}
      theme={{
        base: "bg-none w-[400px] h-[558px]",
        style: {
          auto: "bg-none",
          dark: "bg-none",
          light: "bg-none",
        },
      }}
      content={<JogadorCard jogador={jogador} />}
      {...tooltipProps}
    >
      {children}
    </Tooltip>
  );
};
