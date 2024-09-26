"use client";

import { Dropdown } from "flowbite-react";

export function SelectMenu() {
  return (
    <Dropdown label="Cadastros" inline>
      <Dropdown.Item onClick={() => console.log("cliquei em Equipes")}>
        Equipes
      </Dropdown.Item>
      <Dropdown.Item>Estádios </Dropdown.Item>
      <Dropdown.Item>Jogadores</Dropdown.Item>
    </Dropdown>
  );
}
