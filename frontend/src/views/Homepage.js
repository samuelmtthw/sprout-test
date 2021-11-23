import React, { useEffect, useState } from "react";

import PokeCard from "../components/PokeCard";

export default function HomePage() {
  return (
    <div id="HomePage" className="page">
      <div className="wrapper">
        <h1 className="text-center p-3 mb-5">Pokedex</h1>

        <div className="cardContainer d-flex flex-row flex-wrap mx-3">
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
          <PokeCard></PokeCard>
        </div>
      </div>
    </div>
  );
}
