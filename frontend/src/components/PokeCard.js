import React from "react";
import { Link } from "react-router-dom";

export default function PokeCard({ details }) {
  // console.log(details.name, details.imgUrl);

  function properCase(word) {
    let result = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      result += word[i];
    }
    return result;
  }

  return (
    <Link to={`/pokemon/${details.name}`}>
      <div
        className={`pokeCard card d-block p-3 m-1 shadow border-0 bg-secondary`}
        data-aos={"fade-up"}
      >
        <h3>{properCase(details.name)}</h3>

        {/* {details.types?.map((el) => {
          return (
            <span className="py-1 px-3 mx-1" key={el.type.name}>
              {properCase(el.type.name)}
            </span>
          );
        })} */}

        {/* <img src={details.imgUrl} alt="sprites" /> */}

        <span className="py-1 px-3 mx-1">Grass</span>
        <span className="py-1 px-3 mx-1">Poison</span>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
          alt="sprites"
        />
      </div>
    </Link>
  );

  // return <h1>{details}</h1>;
}
