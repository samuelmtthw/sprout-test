import axios from "../apis/server";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokeCard({ details }) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `/pokemon/${details}`,
    })
      .then(({ data }) => {
        setPokemon({
          name: data.name,
          types: data.types,
          imgUrl: data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function properCase(word) {
    let result = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      result += word[i];
    }
    return result;
  }

  if (isLoading) {
    return (
      <a>
        <div
          className={`pokeCard card d-block p-3 m-1 shadow border-0`}
          data-aos={"zoom-in"}
        ></div>
      </a>
    );
  }

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div
        className={`pokeCard card d-block p-3 m-1 shadow border-0`}
        data-aos={"zoom-in"}
      >
        <h3>{properCase(details)}</h3>

        {pokemon.types?.map((el) => {
          return (
            <span className="py-1 px-3 mx-1" key={el.type.name}>
              {properCase(el.type.name)}
            </span>
          );
        })}

        <img src={pokemon.imgUrl} alt="sprites" />
      </div>
    </Link>
  );
}
