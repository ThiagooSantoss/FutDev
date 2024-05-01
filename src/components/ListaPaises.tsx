import React from "react";
import WorldFlag from "react-world-flags";

interface ListaPaisesProps {
  codigo_iso: string;
}

export const ListaPaises: React.FC<ListaPaisesProps> = ({ codigo_iso }) => {
  return (
    <div style={{ width: "50px", height: "30px" }}>
      <WorldFlag code={codigo_iso} />
    </div>
  );
};

export default ListaPaises;
