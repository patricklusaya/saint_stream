import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MovieDetails.css'; // Ensure you have this CSS file for styling
import { ArrowSquareDownRight } from 'phosphor-react';


const MovieDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie } = location.state || {};

    if (!movie) {
        return <div>No movie data available</div>;
    }

    // Function to handle button click
    const fetchActors = () => {
        navigate('/actors', { state: { movieId: movie.id } });
    };

    const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image+Available';

    return (
        <div className="movieDetails-container">
            <div className="movieDetails-header">
                <img
                    src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : placeholderImage}
                    alt={movie.name}
                    className="movieDetails-backdrop"
                />
                <h2 className="movieDetails-title">{movie.name}</h2>
                <div className="movieDetails-meta">
                    <span className="movieDetails-release-date">First Aired: {movie.first_air_date}</span>
                    <span className="movieDetails-rating">⭐ {movie.vote_average} ({movie.vote_count} votes)</span>
                </div>
            </div>
            <div className="movieDetails-info">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage}
                    alt={movie.name}
                    className="movieDetails-poster"
                />
                <div className="movieDetails-overview">
                    <button className="custom-button" onClick={fetchActors}>
                        <ArrowSquareDownRight size={30} />
                        <span>View Actors</span>
                    </button>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
