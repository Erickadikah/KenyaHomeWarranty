import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function FixedProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - screenHeight;
      const scrollPercentage = (scrolled / maxScroll) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProgressBar
      now={progress}
      style={{ position: 'fixed', top: '50px', width: '100vw', height: '5px', borderRadius: 0, zIndex: "210" }}
    />
  );
}

export default FixedProgressBar;
