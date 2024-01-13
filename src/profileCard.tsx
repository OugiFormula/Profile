import React from 'react';
import './styles.css';
import icon from './assets/icon.png';
import { FaGithub, FaTwitter, FaDiscord, FaYoutube, FaCoffee, FaLastfmSquare } from 'react-icons/fa';
import DiscordStatus from './discordStatus';

const ProfileCard: React.FC = () => {
  return (
    <div className='profile-card'>
      {/* profile image */}
      <div className='profile-picture'>
        <DiscordStatus userId="173026540907528192" />
        <img className='profile-picture' src={icon} alt='Profile picture' />
      </div>
      {/* Profile information */}
      <div className='profile-info'>
        <h1>Yukio Koito</h1>
        <p>He/Him</p>
        <br/>
        {/* TODO make sure to put the profession on bold text */}
        <p><strong>Graphic Designer - Programming</strong></p>
        <p><strong>20 - Israel - Male</strong></p>
      </div>

      <div className="social-buttons">
        <a href="https://github.com/OugiFormula" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://twitter.com/YukioKoito" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
        <a href="https://discordapp.com/users/173026540907528192" target="_blank" rel="noopener noreferrer"><FaDiscord size={30} /></a>
        <a href="https://ko-fi.com/yukiokoito" target="_blank" rel="noopener noreferrer"><FaCoffee size={30} /></a>
        <a href="https://www.youtube.com/channel/UC0R_wz6W8u1eH40DesG4cng" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
        <br/>
      </div>

      <div className='bio-description'>
        <p>we do be gaming</p>
        <br/>
      </div>
      <div className='now-playing'>
        <a href='https://www.last.fm/user/OugiFormula' target='_blank'><FaLastfmSquare size={30} />&nbsp;Last.FM</a>
        <img src='https://imagelfm.art/image/v2/C1B99286' alt='lastfm'></img>
      </div>
    </div>
  );
}

export default ProfileCard;
