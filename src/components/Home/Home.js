import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "./subcomponents/carousel/MovieCarousel";
import MovieCompanies from "./subcomponents/companies/MovieCompanies";
import TopRated from "./subcomponents/TopRated/TopRated";
import { Fade, Slide } from "react-reveal";
import Popular from "./subcomponents/popular/Popular";
import Trending from "./subcomponents/trending/Trending";
import Movies from "./subcomponents/movies/Movies";
import Series from "./subcomponents/series/Series";
import AiringToday from "../airingToday/AiringToday";
import { ClipLoader } from "react-spinners"; 

export default function Home() {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        movies: [],
        companyImages: [],
        topRated: [],
        popular: [],
        nowPlaying: [],
        series: [],
        trending: [],
        upcoming: [],
        airingToday:[],
        loading: true, 
    });

    const appState = useSelector((state) => state.app);

    useEffect(() => {
        try {
            setState((prevState) => ({
                ...prevState,
                movies: appState.movies,
                companyImages: appState.companies,
                topRated: appState.topRated,
                popular: appState.popular,
                nowPlaying: appState.nowPlaying.slice(0, 5),
                series: appState.series,
                upcoming: appState.upcoming,
                trending: appState.trending,
                airingToday:appState.airingToday,
                loading: false, 
            }));
        } catch (e) {
            console.log(e);
            setState((prevState) => ({ ...prevState, loading: false })); 
        }
    }, [appState]);

    const { movies, companyImages, topRated, popular, nowPlaying, series, trending, upcoming, loading ,airingToday} = state;

    // Check if any of the arrays are empty
    const isLoading = loading || 
        !movies.length || 
        !companyImages.length || 
        !topRated.length || 
        !popular.length || 
        !nowPlaying.length || 
        !series.length || 
        !trending.length || 
        !upcoming.length ||
        !airingToday.length;

    if (isLoading) {
        return (
            <div className="loading-container">
                <ClipLoader size={40} color={"#333"} loading={true} />
            </div>
        );
    }

    return (
        <Slide duration={1000}>
            <div className="carousel-container">
                <Fade bottom>
                    <MovieCarousel nowPlaying={nowPlaying} />
                </Fade>
                <Fade bottom>
                    <MovieCompanies companies={companyImages} />
                </Fade>
                <Fade bottom>
                    <TopRated topRated={topRated} />
                </Fade>
                <Fade bottom>
                    <Popular popular={popular} />
                </Fade>
                <Fade bottom>
                    <Trending trending={trending} />
                </Fade>
                <Fade bottom>
                    <Movies movies={movies} />
                </Fade>
                <Fade bottom>
                    <Series series={series} />
                </Fade>
                <Fade bottom>
                    <AiringToday airingToday={airingToday} />
                </Fade>
            </div>
        </Slide>
    );
}
