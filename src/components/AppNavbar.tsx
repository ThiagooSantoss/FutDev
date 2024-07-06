
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import 'flowbite';

import Image from "next/image";
import Link from "next/link"

export const AppNavbar = () => {
  return (
    <Navbar className="bg-[#5b7e28] items-end">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={200}
          height={200}
        />
      </Navbar.Brand>
      <Navbar.Toggle className="[&:not(:active)]:text-white [&:not(:active)]:bg-transparent focus:bg-[#5b7e28] active:text-white" />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-white hover:text-black" active>Início</Navbar.Link>
        <Navbar.Link as={Link} href="/sobre" className="text-white hover:text-black">Sobre</Navbar.Link>
        <Navbar.Link href="/equipes" className="text-white hover:text-black">Equipes</Navbar.Link>
        <Navbar.Link href="/jogadores" className="text-white hover:text-black">Jogadores</Navbar.Link>
        <Navbar.Link href="/contato" className="text-white hover:text-black">Contato</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
