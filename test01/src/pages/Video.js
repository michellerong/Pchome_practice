import React, { useState } from 'react';
import { Carousel } from 'antd';
import ReactPlayer from 'react-player';

import videosData from './videodata.json'; // 假設路徑根據實際情況調整

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideos = () => {
    const newIndex = (currentIndex + 3) % videosData.length; // Increment by 3, loop back to the beginning if necessary
    setCurrentIndex(newIndex);
  };
  const prevVideos = () => {
    const newIndex = currentIndex - 3 < 0 ? videosData.length - 3 : currentIndex - 3;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='short-container'>
      <Carousel afterChange={nextVideos} slidesToShow={3} slidesToScroll={2}>
        {videosData.map(video => (
          <div key={video.id}>
            <ReactPlayer url={video.url} controls width='180px' height='320px'/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;