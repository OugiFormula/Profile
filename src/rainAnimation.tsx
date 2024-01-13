import React, { useEffect } from 'react';
import './rainAnimation.css';

const RainAnimation: React.FC = () => {
  useEffect(() => {
    const createRaindrop = () => {
      const left = `${Math.random() * 100}vw`;
      const top = `${Math.random() * 1}vh`;
      const speed = Math.random() * 2 + 1;

      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = left;
      raindrop.style.top = top;
      raindrop.style.animationDuration = `${speed}s`;

      document.getElementById('rain-container')?.appendChild(raindrop);
    };

    const createRain = () => {
      for (let i = 0; i < 100; i++) {
        createRaindrop();
      }
    };

    createRain();
  }, []);

  return <div id="rain-container" className="rain-container"></div>;
};

export default RainAnimation;
