"use client"

import React, { useState } from 'react';

const DuelContainer = () => {
  const [equipes, setEquipes] = useState([
    { id: 1, name: 'Jogador 1', equipe: 1 },
    { id: 2, name: 'Jogador 2', equipe: 1 },
    { id: 3, name: 'Jogador 3', equipe: 2 },
    { id: 4, name: 'Jogador 4', equipe: 2 },
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e.target)
    
  };

  const handleDrop = (e, equipe) => {
    const id = e.dataTransfer.getData('text');
    const updatedEquipes = equipes.map((jogador) => {
      if (jogador.id === parseInt(id)) {
        return { ...jogador, equipe: equipe };
      }
      return jogador;
    });
    setEquipes(updatedEquipes);
  };

  const renderEquipe = (equipe) => {
    return equipes
      .filter((jogador) => jogador.equipe === equipe)
      .map((jogador) => (
        <div
          key={jogador.id}
          draggable
          onDragStart={(e) => handleDragStart(e, jogador.id)}
          className="p-2 bg-white border rounded mt-2"
        >
          {jogador.name}
        </div>
      ));
  };

  return (
    <div className="flex justify-around p-4">
      <div
        id="section1"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 1)}
        className="w-1/2 h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">Equipe 1</h2>
        {renderEquipe(1)}
      </div>
      <div
        id="section2"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 2)}
        className="w-1/2 h-64 p-4 bg-gray-200 border-2 border-dashed border-gray-400 rounded"
      >
        <h2 className="text-center">Equipe 2</h2>
        {renderEquipe(2)}
      </div>
    </div>
  );
};

export default DuelContainer;