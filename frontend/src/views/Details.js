import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "../apis/server";

export default function Details() {
  const { name } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `/pokemon/${name}`,
    })
      .then(({ data }) => {
        setDetails({
          id: data.id,
          name: data.name,
          types: data.types,
          imgUrl: data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function properCase(word) {
    if (word) {
      let result = word[0].toUpperCase();
      for (let i = 1; i < word.length; i++) {
        result += word[i];
      }
      return result;
    }
  }

  if (isLoading) {
    return (
      <div id="Details">
        <h1>isLoading</h1>
      </div>
    );
  }

  return (
    <div id="Details" className="page">
      <div className="wrapper">
        <div className="detailsHead d-flex flex-column p-5">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className="text-left">{properCase(details.name)}</h1>
            <h5>#{details.id}</h5>
          </div>
          <div className="types mt-1">
            {details.types?.map((el) => {
              return (
                <span className="py-1 px-3 mx-1" key={el.type.name}>
                  {properCase(el.type.name)}
                </span>
              );
            })}
          </div>
          <div className="picture">
            <img src={details.imgUrl} alt="sprites" />
          </div>
        </div>
        <div className="detailsBody p-4">
          <ul className="nav nav-pills my-3 " id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-about-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-about"
                type="button"
                role="tab"
                aria-controls="pills-about"
                aria-selected="true"
              >
                About
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-stats-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-stats"
                type="button"
                role="tab"
                aria-controls="pills-stats"
                aria-selected="false"
              >
                Base Stats
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-evo-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-evo"
                type="button"
                role="tab"
                aria-controls="pills-evo"
                aria-selected="false"
              >
                Evolution
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-moves-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-moves"
                type="button"
                role="tab"
                aria-controls="pills-moves"
                aria-selected="false"
              >
                Moves
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-about"
              role="tabpanel"
              aria-labelledby="pills-about-tab"
            >
              about
            </div>
            <div
              className="tab-pane fade"
              id="pills-stats"
              role="tabpanel"
              aria-labelledby="pills-stats-tab"
            >
              stats
            </div>
            <div
              className="tab-pane fade"
              id="pills-evo"
              role="tabpanel"
              aria-labelledby="pills-evo-tab"
            >
              evo
            </div>
            <div
              className="tab-pane fade"
              id="pills-moves"
              role="tabpanel"
              aria-labelledby="pills-moves-tab"
            >
              moves
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
