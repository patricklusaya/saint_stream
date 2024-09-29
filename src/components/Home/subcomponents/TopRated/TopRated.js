import { ArrowBendRightUp, ArrowCircleRight, PlayCircle, ToggleRight } from "phosphor-react";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TopRated.css";

export default function TopRated({ topRated }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handlePosterClick = (item) => {
    navigate(`/movie/${item.id}`, { state: { movie: item } }); // Navigate to movie details
  };

  return (
    <div className="top-rated-container">
      <h2>Top Rated</h2>
      <div className="top-rated-wrapper">
        <div className="top-rated-scroll" ref={scrollRef}>
          {topRated.map((movie) => (
            <div key={movie.id} className="movie-bar">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movies-info">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-details">
                  <span className="vote-average">★{movie.vote_average.toFixed(1)}</span>
                  <span className="release-year">|</span>
                  <span className="release-year">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
              <button
                className="poster-button"
                onClick={() => handlePosterClick(movie)}
              >
                <ArrowCircleRight size={30} color="#46bd6e"/>
              </button>
            </div>
          ))}
        </div>
        <button className="scroll-right-btn" onClick={scrollRight}>
          <ArrowCircleRight color="lightgray" size={32} />
        </button>
      </div>
    </div>
  );
}
