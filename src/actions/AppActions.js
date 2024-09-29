
// Action types imports
import { 

     FETCH_MOVIES_SUCCESS ,
     FETCH_MOVIES_REQUEST,
     FETCH_MOVIES_FAILURE,
 
     FETCH_COMPANY_LOGOS_FAILURE,
     FETCH_COMPANY_LOGOS_REQUEST,
     FETCH_COMPANY_LOGOS_SUCCESS,

     FETCH_TOPRATED_REQUEST,
     FETCH_TOPRATED_SUCCESS,
     FETCH_TOPRATED_FAILURE,

     FETCH_POPULAR_FAILURE,
     FETCH_POPULAR_REQUEST,
     FETCH_POPULAR_SUCCESS,

     FETCH_PLAYINGNOW_FAILURE,
     FETCH_PLAYINGNOW_REQUEST,
     FETCH_PLAYINGNOW_SUCCESS,

     FETCH_SERIES_REQUEST,
     FETCH_SERIES_SUCCESS,
     FETCH_SERIES_FAILURE,

     FETCH_TRENDING_SUCCESS,
     FETCH_TRENDING_REQUEST,
     FETCH_TRENDING_FAILURE,

     FETCH_UPCOMING_SUCCESS,
     FETCH_UPCOMING_REQUEST,
     FETCH_UPCOMING_FAILURE,

     FETCH_ACTORS_SUCCESS,
     FETCH_ACTORS_REQUEST,
     FETCH_ACTORS_FAILURE,

     FETCH_AIRINGTODAY_REQUEST,
     FETCH_AIRINGTODAY_SUCCESS,
     FETCH_AIRINGTODAY_FAILURE

    } from "./Types";

// apikey imports
import { apiKey } from "../components/config/config";

export const fetchPlayingNow = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_PLAYINGNOW_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          options
        );
        const data = await response.json();
  
        dispatch({
          type: FETCH_PLAYINGNOW_SUCCESS,
          payload: data.results
        });

     
      } catch (error) {
        dispatch({
          type: FETCH_PLAYINGNOW_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };

  export const fetchMovies = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_MOVIES_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: data.results
        });

     
      } catch (error) {
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


  export const fetchSeries = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_SERIES_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await 
        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_SERIES_SUCCESS,
          payload: data.results
        });

     
      } catch (error) {
        dispatch({
          type: FETCH_SERIES_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };






  export const fetchCompanyLogos = () => {
    return async (dispatch) => {
        const companyIds = [7505, 178464,  2230, 2785, 140587, 140361];
      dispatch({ type: FETCH_COMPANY_LOGOS_REQUEST });
  
      try {
        const logos = await Promise.all(
          companyIds.map(async (id) => {
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: apiKey,
              },
            };
            const response = await fetch(`https://api.themoviedb.org/3/company/${id}/images`, options);
            const data = await response.json();
            return data.logos.length > 0 ? data.logos[0].file_path : null;
          })
        );
  
        dispatch({ type: FETCH_COMPANY_LOGOS_SUCCESS, payload: logos.filter((logo) => logo !== null) });
        console.log('comps', logos)
      } catch (error) {
        dispatch({ type: FETCH_COMPANY_LOGOS_FAILURE, payload: error.message });
      }
    };
  };


  export const fetchTopRated = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_TOPRATED_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options);
        const data = await response.json();
  
        dispatch({
          type: FETCH_TOPRATED_SUCCESS,
          payload: data.results
        });

        console.log('TR', data.results)

       

     
      } catch (error) {
        dispatch({
          type: FETCH_TOPRATED_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


  export const fetchPopular = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_POPULAR_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_POPULAR_SUCCESS,
          payload: data.results
        });

        console.log('POP', data.results)

     
      } catch (error) {
        dispatch({
          type: FETCH_POPULAR_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


  export const fetchTrending = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_TRENDING_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_TRENDING_SUCCESS,
          payload: data.results
        });

        console.log('POP', data.results)

     
      } catch (error) {
        dispatch({
          type: FETCH_TRENDING_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


  export const fetchUpcoming = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_UPCOMING_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_UPCOMING_SUCCESS,
          payload: data.results
        });

        console.log('POP', data.results)

     
      } catch (error) {
        dispatch({
          type: FETCH_UPCOMING_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


  
  export const fetchActors = (movieId) => {
    return async (dispatch) => {
      dispatch({ type: FETCH_ACTORS_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_ACTORS_SUCCESS,
          payload: data.cast
        });

        console.log('Actors fetched ', data.cast)

     
      } catch (error) {
        dispatch({
          type: FETCH_ACTORS_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };


    
  export const fetchAiringToday = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_AIRINGTODAY_REQUEST });
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
  
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
        const data = await response.json();
  
        dispatch({
          type: FETCH_AIRINGTODAY_SUCCESS,
          payload: data.results
        });

        console.log('airing today', data.results)

     
      } catch (error) {
        dispatch({
          type: FETCH_AIRINGTODAY_FAILURE,
          payload: error.message
        });
        console.error('Error fetching movies:', error);
      }
    };
  };