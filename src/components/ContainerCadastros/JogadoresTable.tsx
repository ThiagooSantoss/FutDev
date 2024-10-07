"use client";

import { Equipe } from "@/types/equipe";
import { Table } from "flowbite-react";
import Image from "next/image";
import { converteDataFull } from "@/utils/converteDataFull";
import { Jogador } from "@/types/jogador";
import ReactCountryFlag from "react-country-flag";

interface ContainerEquipesProps {
  dados: Jogador[];
}

export const JogadoresTable: React.FC<ContainerEquipesProps> = ({ dados }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Apelido</Table.HeadCell>
          <Table.HeadCell>Número</Table.HeadCell>
          <Table.HeadCell>Equipe</Table.HeadCell>
          <Table.HeadCell>Nacionalidade</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {dados?.map((dados) => (
            <Table.Row
              key={dados.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <Image
                  src={`http:127.0.0.1:8000/static/game/media/uploads/${dados.foto}`}
                  alt={`foto do jogador`}
                  width={55}
                  height={55}
                />
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {dados.apelido}
              </Table.Cell>

              <Table.Cell>{dados.numero}</Table.Cell>

              <Table.Cell>{dados.equipe}</Table.Cell>
              <Table.Cell>
                <ReactCountryFlag
                  className="text-5xl"
                  countryCode={dados.nacionalidade}
                  svg
                />
              </Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
