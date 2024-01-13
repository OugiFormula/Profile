import React from 'react';
import ProfileCard from './profileCard';
import RainAnimation from './rainAnimation';
import './styles.css';
import background from './assets/test.gif';
import AudioPlayer from './audioPlayer';

const App: React.FC = () => {
  return (
    <div className="app">
      <ProfileCard />
      <RainAnimation />
      <div className="bottom-buttons">
        <AudioPlayer />
        <a href='https://ko-fi.com/yukiokoito/shop' target='_blank' rel="noopener noreferrer"><button id='funkybottons'>🖋️ Commissions</button></a>
      </div>
      <div className="backgroundimg">
        <img src={background} className='background-image' alt="Background" />
      </div>
    </div>
  );
};

export default App;
