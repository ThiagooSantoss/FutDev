"use client";

import { Table } from "flowbite-react";
import Image from "next/image";
import { Estadio } from "@/types/estadio";

interface ContainerEstadiosProps {
  dados: Estadio[];
}

export const EstadiosTable: React.FC<ContainerEstadiosProps> = ({ dados }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>Capacidade</Table.HeadCell>
          <Table.HeadCell>Local</Table.HeadCell>
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
                  alt={`foto do estadio`}
                  width={55}
                  height={55}
                />
              </Table.Cell>

              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {dados.nome}
              </Table.Cell>

              <Table.Cell>{dados.capacidade}</Table.Cell>

              <Table.Cell>{dados.local}</Table.Cell>
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
