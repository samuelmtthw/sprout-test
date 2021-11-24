import React, { useEffect, useState } from "react";

import axios from "../apis/server";
import PokeCard from "../components/PokeCard";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const [page, setPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "/pokemon",
      params: {
        limit: "12",
        // offset: page * 12,
      },
    })
      .then(({ data }) => {
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const inputPokemon = pokemons;

    for (const pokemon of inputPokemon) {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `/pokemon/${pokemon.name}`,
      })
        .then(({ data }) => {
          pokemon.imgUrl = data.sprites.front_default;
          pokemon.types = data.types;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setPokemons(inputPokemon);
  }, [pokemons]);

  if (isLoading) {
    return (
      <div id="HomePage">
        <h1>isLoading</h1>
      </div>
    );
  }

  return (
    <div id="HomePage" className="page py-5">
      <div className="wrapper">
        <h1 className="text-center p-3 mb-5">Pokedex</h1>

        <div className="cardContainer d-flex flex-row flex-wrap mx-3">
          {pokemons.map((el) => {
            return <PokeCard details={el} key={el.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
