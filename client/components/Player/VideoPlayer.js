"use client"
import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimation();
  
  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!video.paused);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      const { top } = videoRef.current.getBoundingClientRect();
      console.log(top)
      console.log(window.innerHeight )
      const isVisible = top < window.innerHeight
      

      if (isVisible) {
        controls.start({ x: 0, opacity: 1 ,transition: { duration: 0.1, ease: "easeInOut" } });
      } else {
        controls.start({ x: -300, opacity: 0.4 , transition: { duration: 0.1, ease: "easeOut" } });
      }
     
    };

 
    window.addEventListener('scroll', handleScroll);

   
   

   
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="video-container"
      initial={{ x: -300, opacity: 0 }}
      animate={controls}
      transition={{ type: 'cool', stiffness: 100, damping: 15 }}
    >
      <video onClick={togglePlay} ref={videoRef} controls={false} poster={thumbnailSrc}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default VideoPlayer;