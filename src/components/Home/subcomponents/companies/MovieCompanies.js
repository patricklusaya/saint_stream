// MovieCompanies.js
import React, { useRef, useEffect, useState } from 'react';
import './MovieCompanies.css'; // Make sure to have styles in this file

const MovieCompanies = ({ companies }) => {
  const scrollRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        // Check if the scrollable content is wider than the viewport
        const isOverflowing =
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
        setShowScrollButton(isOverflowing);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [companies]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  console.log('lenth', companies.length);


  return (
    <div className="movie-companies-container">
     
      <div className="movie-companies" ref={scrollRef}>
        {companies.map((logoPath, index) => (
          <div key={index} className="company-logo-container">
            <img
              src={`https://image.tmdb.org/t/p/original${logoPath}`} // Using the logo path directly from the array
              alt={`Company Logo ${index}`}
              className="company-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCompanies;
