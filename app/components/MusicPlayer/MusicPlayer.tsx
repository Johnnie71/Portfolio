'use client'
import React, { useEffect, useState } from 'react';
import ReactHowler from 'react-howler'

const MusicPlayer = () => {
  const [isPLaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    setIsPlaying(!isPLaying);
  };
  
  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <ReactHowler
        src="/music/galaxy.mp3"
        playing={isPLaying}
        loop={true}
        volume={0.2}
      />
    </div>
  )
}

export default MusicPlayer;