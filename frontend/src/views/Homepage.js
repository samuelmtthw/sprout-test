import React, { useEffect, useState } from "react";

import axios from "../apis/server";
import PokeCard from "../components/PokeCard";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "/pokemon",
      params: {
        limit: "20",
        offset: (page - 1) * 12,
      },
    })
      .then(({ data }) => {
        setPokemons(data.results);
        // const oldPokemons = pokemons;
        // data.results.forEach((el) => {
        //   oldPokemons.push(el);
        // });

        // console.log(data.results);
        // setPokemons([...pokemons, data.results]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const handleChangePage = (event) => {
    console.log(event.target.innerHTML);
    setPage(event.target.innerHTML);
  };

  if (isLoading) {
    return (
      <div id="HomePage" className="page py-5">
        <div className="wrapper">
          <h1 className="text-center p-3 mb-5">Pokédex</h1>

          <div className="cardContainer d-flex flex-row flex-wrap mx-3"></div>
        </div>
      </div>
    );
  }

  return (
    <div id="HomePage" className="page py-5">
      <div className="wrapper">
        <h1 className="text-center p-3 mb-5">Pokédex</h1>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li> */}
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={handleChangePage}
                value={"1"}
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={handleChangePage}
                value={"2"}
              >
                2
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={handleChangePage}
                value={"3"}
              >
                3
              </a>
            </li>
            {/* <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="cardContainer d-flex flex-row flex-wrap mx-3">
          {pokemons.map((el) => {
            return <PokeCard details={el.name} key={el.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
