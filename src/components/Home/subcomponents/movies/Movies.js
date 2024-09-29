import React, { useRef } from "react";
import { ArrowCircleRight, FastForward } from "phosphor-react";
import { useNavigate } from "react-router-dom"; // Make sure you're using react-router-dom for navigation
import "./Movies.css";

const Movies = ({ movies }) => {
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
    navigate(`/movie/${item.id}`, { state: { movie: item } });
  };

  return (
    <div className="movies-container">
      <h2>Movies</h2>
      <div className="movies-wrapper">
        <div className="movies-scroll" ref={scrollRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="movieRow-item">
              <div className="movieRow-poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="movieRow-poster"
                />
                <button
                  className="movieRow-poster-btn"
                  onClick={() => handlePosterClick(movie)}
                >
                <FastForward  size={30} />
                
                </button>
              </div>
              <div className="popular-movie-info">
                <div className="popular-movie-title">{movie.title}</div>
                <div className="popular-movie-details">
                  <span className="popular-vote-average">★{movie.vote_average.toFixed(1)}</span>
                  <span className="popular-release-year">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="movies-scroll-right-btn" onClick={scrollRight}>
          <ArrowCircleRight color="lightgray" size={32} />
        </button>
      </div>
    </div>
  );
};

export default Movies;
