import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import './MovieCarousel.css'; 
import { ArrowSquareDownRight, Info, PlayCircle } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

const MovieCarousel = ({ nowPlaying }) => {

  const navigate = useNavigate();

  const handlePosterClick = (item) => {
    navigate(`/movie/${item.id}`, { state: { movie: item } }); 
};

  return (
    <Carousel
    showThumbs={true}
    showStatus={false}
    infiniteLoop={true}
    autoPlay={true}
    interval={2000}
    emulateTouch={true}
    stopOnHover={true}
    showArrows={false}
    autoFocus={true} // Ensure the carousel gets focus
  >
      {nowPlaying.map((movie) => (
       
        <div
          key={movie.id}
          className="carousel-item"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="movie-info">
            <h2>{movie.title}</h2>
            

            <div className="movie-detailss">
             <p className="faint-text">Release Year: {movie.release_date.slice(0, 4)}, <span style={{color:"gold"}}>★</span>{Math.floor(movie.vote_average)}/10 ,</p>
            </div>
            <p>{movie.overview}</p>
            <button className="custom-button" onClick={( ) => handlePosterClick(movie)}>
            <ArrowSquareDownRight size={30} />
            <span>Info</span>
            </button>
            
          </div>
        </div>
       
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
