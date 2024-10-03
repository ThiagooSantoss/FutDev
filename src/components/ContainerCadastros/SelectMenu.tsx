"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Dropdown } from "flowbite-react";

interface SelectMenuProps {
  selectMenuValue: string;
  setSelectMenuValue: Dispatch<SetStateAction<string>>;
}

export const SelectMenu = ({
  selectMenuValue,
  setSelectMenuValue,
}: SelectMenuProps) => {
  return (
    <Dropdown label={selectMenuValue} inline>
      <Dropdown.Item onClick={() => setSelectMenuValue("Equipes")}>
        Equipes
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSelectMenuValue("Estádios")}>
        Estádios
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setSelectMenuValue("Jogadores")}>
        Jogadores
      </Dropdown.Item>
    </Dropdown>
  );
};
