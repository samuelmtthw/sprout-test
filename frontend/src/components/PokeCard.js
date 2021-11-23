import React from "react";

export default function PokeCard() {
  return (
    <div
      className={`pokeCard card p-3 m-1 shadow border-0 bg-secondary`}
      data-aos={"fade-up"}
    >
      <h3>Bulbasaur</h3>
      <span className="py-1 px-2 mb-1">Grass</span>
      <span className="py-1 px-2 mb-1">Poison</span>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
        alt="sprites"
      />
    </div>
  );
}
