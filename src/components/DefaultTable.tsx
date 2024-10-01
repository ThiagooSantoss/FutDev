"use client";

import { Equipe } from "@/types/equipe";
import { Table } from "flowbite-react";
import Image from "next/image";
import { converteDataFull } from "@/utils/converteDataFull";

interface ContainerEquipesProps {
  equipes: Equipe[];
}

export const DefaultTable: React.FC<ContainerEquipesProps> = ({ equipes }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Escudo</Table.HeadCell>
          <Table.HeadCell>Equipe</Table.HeadCell>
          <Table.HeadCell>Cores</Table.HeadCell>
          <Table.HeadCell>Fundação</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {equipes?.map((equipe) => (
            <Table.Row
              key={equipe.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <Image
                  src={`http:127.0.0.1:8000/static/game/media/uploads/${equipe.foto}`}
                  alt={`foto do escudo`}
                  width={55}
                  height={55}
                />
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {equipe.nome}
              </Table.Cell>

              <Table.Cell className="flex">
                {equipe.cores.map((cor) => (
                  <div
                    key={cor}
                    style={{
                      backgroundColor: cor,
                      width: "25px",
                      height: "25px",
                      border: "1px solid #000",
                      borderRadius: "50%",
                    }}
                  ></div>
                ))}
              </Table.Cell>

              <Table.Cell>{converteDataFull(equipe.fundacao)}</Table.Cell>
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
