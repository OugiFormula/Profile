import React, { useEffect, useState } from 'react';

interface LanyardData {
  data?: {
    discord_status?: string;
  };
}

const DiscordStatus: React.FC<{ userId: string }> = ({ userId }) => {
  const [status, setStatus] = useState<string>('offline');

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        if (response.ok) {
          const data: LanyardData = await response.json();
          const userStatus = data.data?.discord_status || 'offline';
          setStatus(userStatus);
        } else {
          console.error('Failed to fetch Discord status:', response.status, response.statusText);
          setStatus('offline');
        }
      } catch (error) {
        console.error('Error fetching Discord status:', error);
        setStatus('offline');
      }
    };

    fetchDiscordStatus();
  }, [userId]);

  return (
    <div className='discord-status-circle' style={{backgroundColor: getStatusColor(status)}}/>);};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'online':
      return '#43b581'; // Discord online color
    case 'dnd':
      return '#f04747'; // Discord do not disturb color
    case 'idle':
      return '#faa61a'; // Discord idle color
    case 'offline':
      return '#747f8d'; // Discord offline color
    default:
      return '#747f8d'; // Default color for unknown status
  }
};

export default DiscordStatus;
