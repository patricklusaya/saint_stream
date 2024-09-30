import React, { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import './Series.css'; 
import { ClipLoader } from "react-spinners"; // Import ClipLoader

export default function Series() {
    const [state, setState] = useState({ series: [] });
    const [visibleCount, setVisibleCount] = useState(18); 
    const [loading, setLoading] = useState(true); // Add loading state
    const appState = useSelector((state) => state.app);
    const navigate = useNavigate(); 

    useEffect(() => {
        try {
            setState((prevState) => ({
                ...prevState,
                series: appState.series,
            }));
            setLoading(false); 
        } catch (e) {
            console.log(e);
            setLoading(false); // Handle error
        }
    }, [appState]);

    const { series } = state;

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 18); 
    };

    const truncateOverview = (overview) => {
        return overview.length > 200 ? `${overview.slice(0, 200)}...` : overview;
    };

    const handlePosterClick = (item) => {
        navigate(`/movie/${item.id}`, { state: { movie: item } }); 
    };

    // Check if the series array is empty or still loading
    if (loading || !series.length) {
        return (
            <div className="loading-container">
                <ClipLoader size={40} color={"#333"} loading={true} />
            </div>
        );
    }

    return (
        <div className="series-container">
            {series.slice(0, visibleCount).map((item) => (
                <div className="series-card" key={item.id} onClick={() => handlePosterClick(item)}>
                    <div className="poster-container">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title}
                            className="series-poster"
                        />
                        <div className="overlay">
                            <div className="overlay-content">
                                <h3 className="series-title">{item.title}</h3>
                                <p className="series-overview">{truncateOverview(item.overview)}</p> 
                            </div>
                        </div>
                    </div>
                    <div className="series-info">
                        <h3 className="series-title">{item.title}</h3>
                        <div className="series-rating">⭐ {item.vote_average.toFixed(1)}</div>
                    </div>
                </div>
            ))}
            {visibleCount < series.length && ( 
                <button className="load-more" onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
}
