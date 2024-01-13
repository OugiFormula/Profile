import React, { useState, useEffect, useRef } from 'react';
import music from './assets/audio/funky.mp3';
import './styles.css'; // Make sure to import your styles

const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleOverlayClick = () => {
    setOpacity(0);

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div>
      <div
        style={{ opacity }}
        className="reveal-button"
        onClick={handleOverlayClick}
      >
        <p>[CLICK TO REVEAL]</p>
      </div>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <button id="muteButton" onClick={toggleMute}>
        {isMuted ? '🔈 Music: Off' : '🔊 Music: On'}
      </button>
    </div>
  );
};

export default AudioPlayer;
