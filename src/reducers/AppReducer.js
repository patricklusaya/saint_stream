import { fetchActors } from "../actions/AppActions";
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
    FETCH_ACTORS_FAILURE

} from "../actions/Types";


const INITIAL_STATE = {
    nowPlaying:[],
    movies:[],
    companies:[],
    topRated:[],
    popular:[],
    series:[],
    trending:[],
    upcoming:[],
    actors:[],
    fetchingActors:false
};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
        return { ...state, movies:action.payload}
    case FETCH_PLAYINGNOW_SUCCESS:
        return { ...state, nowPlaying:action.payload}
    case FETCH_COMPANY_LOGOS_SUCCESS:
        return { ...state, companies:action.payload}
    case FETCH_TOPRATED_SUCCESS:
        return {...state, topRated:action.payload}
    case FETCH_POPULAR_SUCCESS:
        return {...state, popular:action.payload}
    case FETCH_SERIES_SUCCESS:
        return {...state, series:action.payload}
    
    case FETCH_TRENDING_SUCCESS:
        return {...state, trending:action.payload}
    case FETCH_UPCOMING_SUCCESS:
        return {...state, upcoming:action.payload}
    case FETCH_ACTORS_REQUEST:
        return {...state, fetchingActors:true}

    case FETCH_ACTORS_SUCCESS:
        return {...state, actors:action.payload, fetchingActors:false}

    default:
      return state;
  }
};

export default AppReducer;
