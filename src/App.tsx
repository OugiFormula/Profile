import React from 'react';
import ProfileCard from './profileCard';
import RainAnimation from './rainAnimation';
import './styles.css';
import background from './assets/yukiobackground.gif';

const App: React.FC = () => {
  return (
    <div className="app">
      <ProfileCard />
      <RainAnimation />
      <div className="backgroundimg">
        <img src={background} className='background-image' alt="Background" />
      </div>
    </div>
  );
};

export default App;
