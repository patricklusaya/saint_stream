// styles import
import "./App.css";



// General imports
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

// component imports
import Main from "./components/Main";
import { fetchCompanyLogos, fetchMovies, fetchPlayingNow, fetchPopular, fetchSeries, fetchTopRated, fetchTrending, fetchUpcoming } from "./actions/AppActions";


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({});

  useEffect(() => {

    dispatch(fetchPlayingNow())
    dispatch(fetchSeries())
    dispatch(fetchMovies());
    dispatch(fetchCompanyLogos());
    dispatch(fetchTopRated())
    dispatch(fetchPopular())
    dispatch(fetchTrending())
    dispatch(fetchUpcoming())

   
  }, []);

  const appState = useSelector((state) => state.app);

  useEffect(() => {
    try {
      setState((prevState) => ({
        ...prevState,
        profile: appState.profile,
      }));
    } catch (e) {
      console.log(e);
    }
  }, [appState]);

  const {} = state;

  const renderMain = () => {
    return <Main />;
  };

  return (
    
    <Routes>
      <Route path="*" element={renderMain()} />
    </Routes>
  );
};

export default App;
