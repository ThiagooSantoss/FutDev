"use client";

import { Equipe } from "@/types/equipe";
import { Table } from "flowbite-react";
import Image from "next/image";
import { converteDataFull } from "@/utils/converteDataFull";

interface ContainerEquipesProps {
  dados: Equipe[];
}

export const EquipesTable: React.FC<ContainerEquipesProps> = ({ dados }) => {
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
          {dados?.map((dados) => (
            <Table.Row
              key={dados.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>
                <Image
                  src={`http:127.0.0.1:8000/static/game/media/uploads/${dados.foto}`}
                  alt={`foto do escudo`}
                  width={55}
                  height={55}
                />
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {dados.nome}
              </Table.Cell>

              <Table.Cell>
                <div className="flex items-center gap-1">
                  {dados.cores.map((cor) => (
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
                </div>
              </Table.Cell>

              <Table.Cell>{converteDataFull(dados.fundacao)}</Table.Cell>
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
