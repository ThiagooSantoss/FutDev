"use client";

import { Navbar } from "flowbite-react";
import "flowbite";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AppNavbar = () => {
  const pathName = usePathname();

  const linksArr = [
    {
      link: "/",
      texto: "Início",
    },
    {
      link: "/sobre",
      texto: "Sobre",
    },
    {
      link: "/equipes",
      texto: "Equipes",
    },
    {
      link: "/jogadores",
      texto: "Jogadores",
    },
    {
      link: "/contato",
      texto: "Contato",
    },
  ];

  return (
    <Navbar className="bg-[#5b7e28] items-end">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image src={"/logo.png"} alt={"logo"} width={200} height={200} />
      </Navbar.Brand>

      <Navbar.Toggle className="[&:not(:active)]:text-white [&:not(:active)]:bg-transparent focus:bg-[#5b7e28] active:text-white" />

      <Navbar.Collapse>
        {linksArr.map((linkItem) => (
          <Navbar.Link
            key={linkItem.link}
            active={pathName === linkItem.link}
            className="text-white hover:text-black"
            href={linkItem.link}
          >
            {linkItem.texto}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
