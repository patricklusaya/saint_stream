import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FacebookLogo, GoogleLogo, InstagramLogo, MagnifyingGlass, TwitterLogo } from 'phosphor-react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Actors from './actors/Actors';
import { Fade, Slide } from 'react-reveal';

// styles imports
import "./Main.css";

// component imports
import Home from './Home/Home';
import Series from './series/Series';
import MovieDetails from './Home/subcomponents/movieDetails/MovieDetails';

export default function Main() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const routeAccessLevel = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/series" element={<Series />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actors" element={<Actors />} />
      </Routes>
    );
  };

  const renderTopBar = () => {
    return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo"> <span></span> Saint<span style={{color:"#4CAF50"}}>Stream</span>  </div>
        <div className="navbar-links">
          <NavLink to="/">  <span>Home</span> </NavLink>
          <NavLink to="/series"><span>Films</span></NavLink>
        </div>
        <div className="navbar-search">
          <MagnifyingGlass size={22} />
        </div>
      </nav>
    );
  };

  const mainBody = () => {
    return (
      <div className="container-fluid position-relative bg-white d-flex p-0 flex-column" style={{ minHeight: '100vh' }}>
        <div className="content flex-grow-1">
          {renderTopBar()}
          <div className="bodyContainer">
            {routeAccessLevel()}
          </div>
        </div>
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-left">
              <Slide>
              <div className="footer-about">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus eius quos autem id vero neque veniam perspiciatis ducimus, accusamus officiis culpa recusandae molestiae, soluta aliquam voluptas, cupiditate aut consequatur!</p>
              </div>
              </Slide>
            
            </div>
           
            <div className="footer-right">
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">Films</a>
                <a href="#about">Actors</a>
              </div>
              <div className="footer-contact">
                <InstagramLogo size={30} />
                <TwitterLogo size={30}/>
                <FacebookLogo size={30}/>
                <GoogleLogo size={30}/>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              
              <div className="footer-privacy">
                <a href="#home">Privacy Policy</a>
                <a href="#about">Terms</a>
                <a href="#about">Copyright</a>
              </div>
            </div>
           
            <div className="footer-right">
            <p>&copy; 2024 </p>

            
            </div>
          </div>
        </footer>
      </div>
    );
  };

  const renderRoot = () => {
    return (
      <div>
        {mainBody()}
      </div>
    );
  };

  return (
    <div className="main-container">
      {renderRoot()}
    </div>
  );
}
