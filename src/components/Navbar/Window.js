// useWindowWidth.js
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined before adding event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array means this effect will run once on mount

  return windowWidth;
};

export default useWindowWidth;
