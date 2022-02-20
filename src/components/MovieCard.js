import React from "react";
import { StarFilled, HeartOutlined, HeartFilled } from "@ant-design/icons";

const MovieCard = ({ data }) => {
  const posterURL = data.poster_path ? process.env.REACT_APP_POSTER_BASE_URL + data.poster_path : './images/no-image.jpg';
  const date = new Date(data.release_date).getFullYear();

  return (
    <article className="movie-card">
      <div
        className="movie-card__image"
        style={{ backgroundImage: `url(${posterURL})` }}
      >
        <div className="movie-card__bg">
          <span className="movie-card__description">{data.overview || ''}</span>
        </div>
      </div>
      <div className="movie-card__content">
        <span className="movie-card__content-title">{data.original_title}</span>
        <span className="movie-card__content-year">{date || ''}</span>
      </div>
      <div className="movie-card__info">
        <div>
          <StarFilled className="star" />
          <span className="movie-card__info-rate">{data.vote_average || 0}</span>
          <span className="movie-card__info-count">
            ({data.vote_count || 0} votes)
          </span>
        </div>
        <div>
          <HeartFilled className="heart-filled" />
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
