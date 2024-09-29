import React, { useRef } from "react";
import { ArrowCircleRight, ArrowSquareDownRight } from "phosphor-react";
import "./Popular.css"; 
import { useNavigate } from "react-router-dom";

export default function Popular({ popular }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); 

  // Function to scroll the movie bar when the arrow icon is clicked
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

 
  const handlePosterClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="popular-container">
      <h2>Popular</h2>
      <div className="popular-wrapper">
        <div className="popular-scroll" ref={scrollRef}>
          {popular.map((movie, index) => (
            <div key={movie.id} className="popular-movie-bar">
              <div className="popular-index-number">{index + 1}</div>
              <div className="popular-poster-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="popular-movie-poster"
                />
             
                 <button className="poster-hover-btn" onClick={( ) => handlePosterClick(movie)}>
                <ArrowSquareDownRight size={30} />
                <span>Details</span>
                </button>
              </div>
              <div className="popular-movie-info">
                <div className="popular-movie-title">{movie.title}</div>
                <div className="popular-movie-details">
                  <span className="popular-vote-average">
                    ★{movie.vote_average.toFixed(1)}
                  </span>
                  <span className="popular-release-year">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="popular-scroll-right-btn" onClick={scrollRight}>
          <ArrowCircleRight color="lightgray" size={32} />
        </button>
      </div>
    </div>
  );
}
