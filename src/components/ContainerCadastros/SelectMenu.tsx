"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";

interface SelectMenuProps {
  selectMenuValue: string;
  setSelectMenuValue: Dispatch<SetStateAction<string>>;
}

export const SelectMenu = ({
  selectMenuValue,
  setSelectMenuValue,
}: SelectMenuProps) => {
  const handleChange = (value: string) => {
    setSelectMenuValue(value);

    localStorage.setItem("selectedItem", value);
  };

  return (
    <Dropdown
      label=""
      renderTrigger={() => (
        <div className="px-4 py-2 w-fit rounded bg-[#5b7e28] text-white m-5 flex items-center gap-2 cursor-pointer hover:bg-[#455f1e]">
          <span>{selectMenuValue}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      )}
    >
      <Dropdown.Item onClick={() => handleChange("Equipes")}>
        Equipes
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("Estádios")}>
        Estádios
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleChange("Jogadores")}>
        Jogadores
      </Dropdown.Item>
    </Dropdown>
  );
};
