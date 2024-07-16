"use client";

import { useState } from "react";

type Tipo = "geral" | "equipes" | "jogadores" | "treinadores";

export const SearchBar = () => {
  const [tipo, setTipo] = useState<Tipo>("geral");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const opcoesDropdown = [
    { texto: "Geral", onClick: () => setTipo("geral") },
    { texto: "Equipe", onClick: () => setTipo("equipes") },
    { texto: "Jogadores", onClick: () => setTipo("jogadores") },
    { texto: "Treinadores", onClick: () => setTipo("treinadores") },
  ];

  return (
    <form className="max-w-lg mx-auto">
      <div className="relative flex my-5">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 capitalize"
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {tipo}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 block"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {opcoesDropdown.map((item) => (
                <li key={item.texto}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      item.onClick();
                      setIsDropdownOpen(false);
                    }}
                  >
                    {item.texto}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Procure por equipes, jogadores ou treinadores..."
            required
          />
        </div>
      </div>
    </form>
  );
};
