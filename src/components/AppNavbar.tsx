
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import 'flowbite';

import Image from "next/image";
import Link from "next/link"

export const AppNavbar = () => {
  return (
    <Navbar className="bg-[#5b7e28] items-end" fluid rounded menuOpen>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src={"/topo.jpg"}
          alt={"logo"}
          width={350}
          height={350}
        />
      </Navbar.Brand>

      <Navbar.Collapse className="w-fit p-8">
        <Navbar.Link href="#" className="text-white hover:text-black">Início</Navbar.Link>
        <Navbar.Link href="/sobre" className="text-white hover:text-black">Sobre</Navbar.Link>
        <Navbar.Link href="/equipes" className="text-white hover:text-black">Equipes</Navbar.Link>
        <Navbar.Link href="/jogadores" className="text-white hover:text-black">Jogadores</Navbar.Link>
        <Navbar.Link href="/contato" className="text-white hover:text-black">Contato</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
