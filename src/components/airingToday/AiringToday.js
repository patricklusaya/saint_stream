import React from "react";
import { useNavigate } from 'react-router-dom'; // Ensure you import navigate
import './AiringToday.css';
import { ArrowSquareDownRight, ArrowURightDown, FastForward } from "phosphor-react";

export default function AiringToday({ airingToday }) {
  const navigate = useNavigate();

  const handlePosterClick = (item) => {
    navigate(`/movie/${item.id}`, { state: { movie: item } }); // Navigate to movie details
  };

  if (!airingToday || airingToday.length === 0) return null;

  const firstMovie = airingToday[0];
  const otherMovies = airingToday.slice(1);

  const halfLength = Math.ceil(otherMovies.length / 2);
  const secondColumnMovies = otherMovies.slice(0, halfLength);
  const thirdColumnMovies = otherMovies.slice(halfLength);

  return (
    <div className="genContainer">
      <h2>Airing Today</h2>
      <div className="airingToday-container">
        <div className="airingToday-firstColumn">
          <div className="airingToday-poster-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500/${firstMovie.backdrop_path}`}
              alt={firstMovie.title}
              className="airingToday-firstMovie-poster"
            />
          
          </div>
          <div className="airingToday-firstMovie-info">
            <h2>{firstMovie.title}</h2>
            <p>{firstMovie.overview}</p>
            <span><span style={{color:"gold"}}>★</span> {firstMovie.vote_average.toFixed(1)} | </span>
            <span>{new Date(firstMovie.first_air_date).getFullYear()}</span>
            <button className="custom-button" onClick={() => handlePosterClick(firstMovie)} style={{ marginTop: '10px' }}>
              <FastForward size={30} />
              <span>Details</span>
            </button>
          </div>
        </div>

        <div className="airingToday-otherColumns">
        <div className="airingToday-secondColumn">
            {secondColumnMovies.slice(0,4).map((movie) => (
              <div key={movie.id} className="airingToday-movieColumn">
                <div className="airingToday-poster-wrapper">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                    className="airingToday-movie-poster"
                  />
                  <button
                    className="airingToday-poster-button"
                    onClick={() => handlePosterClick(movie)}
                  >
                     <ArrowSquareDownRight size={30} />
                     
                  </button>
                </div>
                <div className="airingToday-movie-info">
                  <h4>{movie.title}</h4>
                  <p><strong>Release Year:</strong> {new Date(movie.first_air_date).getFullYear()}</p>
                  <p><strong>Rating:</strong> <span style={{color:"gold"}}>★</span>{movie.vote_average.toFixed(1)} </p>
                </div>
              </div>
            ))}
          </div>

          <div className="airingToday-thirdColumn">
            {thirdColumnMovies.slice(5, 9).map((movie) => (
              <div key={movie.id} className="airingToday-movieColumn">
                <div className="airingToday-poster-wrapper">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                    className="airingToday-movie-poster"
                  />
                  <button
                    className="airingToday-poster-button"
                    onClick={() => handlePosterClick(movie)}
                  >
                     <ArrowSquareDownRight size={30} />
                     
                  </button>
                </div>
                <div className="airingToday-movie-info">
                  <h4>{movie.title}</h4>
                  <p><strong>Release Year:</strong> {new Date(movie.first_air_date).getFullYear()}</p>
                  <p><strong>Rating:</strong>   <span style={{color:"gold"}}>★</span>{movie.vote_average.toFixed(1)} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
