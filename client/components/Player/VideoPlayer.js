"use client"

import { useRef, useState } from 'react';

const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!video.paused);
  };

  return (
    <div className="video-container">

      <video onClick={togglePlay} ref={videoRef} controls={false} poster={thumbnailSrc}>
        <source src={videoSrc} type="video/mp4" />
   
      </video>
    </div>
  );
};

export default VideoPlayer;
