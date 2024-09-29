# SaintStream(Movie Info Site)

## Project Overview
This project is a movie information site built with React, utilizing the TMDB API to display movie details, popular films, trending series, and more.

## Project Structure
- **public**: Contains the `index.html` file and other static assets.
- **src**: Main source code directory.
  - **actions**: Contains action creators and action types.
    - `Types.js`: Constants for action types.
    - `AppActions.js`: Actions related to movies.
  - **components**: Contains reusable React components.
    - `Home.js`: Home component for main view.
    - `MovieCarousel.js`: Carousel for displaying movies.
    - `MovieDetails.js`: Details view for a single movie.
    - `Popular.js`: Component for popular movies.
    - `TopRated.js`: Component for top-rated movies.
    - `Trending.js`: Component for trending movies.
    - `Series.js`: Component for series.
  - **reducers**: Contains Redux reducers.
    - `index.js`: Combines all reducers.
    - `AppReducer.js`: Reducer for managing movie-related state.
  - **App.js**: Main entry point of the application.
  - **Main.js**: Component for routing and layout.
  - **store.js**: Configuration for the Redux store.
  - **styles**: Contains global styles.
    - `App.css`: Main application styles.
    - `components.css`: Styles for components.
  - **index.js**: Entry point of the application.
  - **README.md**: Documentation file.

## External Libraries Used
- **react-responsive-carousel**: For creating responsive carousels.
- **react-reveal**: For adding animations and transitions to components.
- **react-router-dom**: For routing and navigation within the application.
- **react-spinners**: For loading spinners to indicate progress.
- **phosphor-react**: For using various icons in the application.

## Key Features
- Display a carousel of currently playing movies.
- View detailed information about individual movies.
- Browse popular, top-rated, and trending movies.
- Responsive design for various devices.



