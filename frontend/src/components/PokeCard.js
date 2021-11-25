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
      <div>
        <h1>hello</h1>
      </div>
    );
  }

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div
        className={`pokeCard card d-block p-3 m-1 shadow border-0 bg-secondary`}
        data-aos={"fade-up"}
      >
        <h3>{properCase(details)}</h3>

        {/* {details.types?.map((el) => {
          return (
            <span className="py-1 px-3 mx-1" key={el.type.name}>
              {properCase(el.type.name)}
            </span>
          );
        })} */}

        {/* <img src={details.imgUrl} alt="sprites" /> */}

        {pokemon.types?.map((el) => {
          return (
            <span className="py-1 px-3 mx-1" key={el.type.name}>
              {properCase(el.type.name)}
            </span>
          );
        })}

        {/* <span className="py-1 px-3 mx-1">Grass</span>
        <span className="py-1 px-3 mx-1">Poison</span> */}
        <img src={pokemon.imgUrl} alt="sprites" />
      </div>
    </Link>
  );

  // return <h1>{details}</h1>;
}
