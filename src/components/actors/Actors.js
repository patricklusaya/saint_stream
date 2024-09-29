// Actors.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners';

// style imports
import './Actors.css';

// action imports
import { fetchActors } from '../../actions/AppActions';


const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image+Available';

const Actors = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { movieId } = location.state || {};

    const [state, setState] = useState({
        actors: [],
        fetchingActors: false
    });

    useEffect(() => {
        dispatch(fetchActors(movieId));
    }, [dispatch, movieId]);

    const appState = useSelector((state) => state.app);

    useEffect(() => {
        setState((prevState) => ({
            ...prevState,
            actors: appState.actors || [], 
            fetchingActors: appState.fetchingActors
        }));
    }, [appState]);

    const { fetchingActors, actors } = state;

    if (fetchingActors) {
        return (
            <div className="loading-container">
                <ClipLoader size={40} color={"#333"} loading={true} />
            </div>
        );
    }

    const renderList = () => {
    //    check length by ensuring actors is always an array
        if (actors && actors.length > 0) {
            return (
                <div className="actors-list">
                    {actors.slice(0, 10).map((actor) => (
                        <div key={actor.id} className="actor-card">
                            <img
                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : placeholderImage}
                                alt={actor.name}
                                className="actor-profile"
                            />
                            <h3>{actor.name}</h3>
                            <p>Character: {actor.character}</p>
                        </div>
                    ))}
                </div>
            );
        }
        return (
            <div className="loading-container">
                <p>No data found</p>
            </div>
        )
        ; 
    };

    return (
        <div className="actors-container">
          
            {renderList()}
        </div>
    );
};

export default Actors;
