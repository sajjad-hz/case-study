import React from "react";
import MovieCard from "./MovieCard";
import DropDown from "./DropDown";
import data from "../constants/data";

const CardsList = () => {
  return (
    <section className="cards-list">
      <div className="cards-list__header">
        <span className="cards-list__header-text">Search Results</span>
        <DropDown/>
      </div>

      <div className="cards-list__items">
        {data.results.map((movie, ind) => {
          return <MovieCard key={ind} data={movie} />;
        })}
      </div>
    </section>
  );
};

export default CardsList;
