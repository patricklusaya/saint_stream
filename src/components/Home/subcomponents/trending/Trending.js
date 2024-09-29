import React, { useRef } from 'react';
import { ArrowCircleRight, FastForward } from 'phosphor-react';
import './Trending.css';
import { useNavigate } from 'react-router-dom';

export default function Trending({ trending }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const handlePosterClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="trending-container" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${trending[0]?.poster_path})`,
    }}>
      <div className="trending-scroll-wrapper">
        <div className="trending-scroll" ref={scrollRef}>
          <div className="trending-featured-info">
            <h1>Trending In Saint Stream</h1>
            <h2>{trending[0]?.title}</h2>
            <p>{trending[0]?.overview}</p>
            <div className="trending-details">
            <span style={{color:"gold"}}>★ {trending[0]?.vote_average.toFixed(1)}</span>
              <span> | {new Date(trending[0]?.release_date).getFullYear()}</span>
            </div>
            <button className="custom-button" onClick={() => handlePosterClick(trending[0])} style={{ marginTop: '10px' }}>
              <FastForward size={30} />
              <span>Details</span>
            </button>
          </div>

          {trending.slice(1).map((movie) => (
            <div key={movie.id} className="trending-movie-bar">
              <div className="poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="trending-movie-poster"
                />
                <button className="poster-button" onClick={() => handlePosterClick(movie)}>
                  <FastForward size={24} />
                  <span>View Details</span>
                </button>
                <div className="trending-movie-info">
                  <h4>{movie.title}</h4>
                  <div className="trending-details">
                    <span style={{color:"gold"}}>★ {movie.vote_average.toFixed(1)}</span>
                    <span> | {new Date(movie.release_date).getFullYear()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="trending-scroll-right-btn" onClick={scrollRight}>
          <ArrowCircleRight color="lightgray" size={32} />
        </button>
      </div>
    </div>
  );
}
