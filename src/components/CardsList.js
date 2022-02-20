import React, { useState } from "react";
import MovieCard from "./MovieCard";
import DropDown from "./DropDown";
import data from "../constants/data";
import searchHandler from "../assets/api/serachAPI";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";

const CardsList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cards = useSelector((state) => state.cards);
  const value = useSelector((state) => state.searchValue);
  const [page, setPage] = useState(2);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const { data } = await searchHandler.getSearchResult(value, page);
    if (data.results.length > 0) {
      setPage(page + 1);
      setLoading(false);
      dispatch({
        type: "CARDS",
        payload: { ...data, results: [...cards.results, ...data.results] },
      });
    }
  };

  return (
    <section className="cards-list">
      <div className="cards-list__header">
        <span className="cards-list__header-text">Search Results</span>
        <DropDown />
      </div>
      <div>
        <InfiniteScroll
          dataLength={cards.results.length}
          next={loadMoreData}
          hasMore={cards.results.length < cards.total_results}
          loader={<p>loading</p>}
          endMessage={<p className="end-msg">It is all, nothing more 🤐</p>}
        >
          <div className="cards-list__items">
            {cards.results.map((card, ind) => {
              return <MovieCard key={ind} data={card} />;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default CardsList;
