import React, { useState } from 'react';
import { Carousel, Button } from 'antd';
import ReactPlayer from 'react-player';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import VideoModal from './VideoModal';
import videosData from './videodata.json'; // 假設路徑根據實際情況調整

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState(null);

  const nextVideos = () => {
    const newIndex = (currentIndex + 3) % videosData.length;
    setCurrentIndex(newIndex);
  };

  const prevVideos = () => {
    const newIndex = currentIndex - 3 < 0 ? videosData.length - 3 : currentIndex - 3;
    setCurrentIndex(newIndex);
  };

  // 获取当前切片的视频数据
  const currentVideos = videosData.slice(currentIndex, currentIndex + 3);

  // 如果切片不够三个视频，则补足数据
  while (currentVideos.length < 3) {
    currentVideos.push(null); // 在切片不足三个视频的情况下，添加一个空的元素
  }

  // const handleVideoClick = (video) => {
  //   setCurrentVideo(video);
  //   setModalVisible(true);
  // };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleViewMore = () => {
    setModalVisible(true);
  };

  return (
    <div className="short-container">
      <div className='view-more' ><Button type='link' onClick={handleViewMore}>查看更多</Button></div>
      
      <Button className='prev' onClick={prevVideos} icon={<LeftOutlined />} />
      <Carousel className="carousel" afterChange={nextVideos}  slidesToShow={3} slidesToScroll={2} >
      
        {currentVideos.map((video, index) => (
          <div className="video-slide" key={index}>
            {video && (
              
            <ReactPlayer className="video" url={video.url} controls width='180px' height='320px' />
            
            )}
          </div>
        ))}
      </Carousel>
      <Button className='next' onClick={nextVideos} icon={<RightOutlined />} />
      
      
      <VideoModal visible={modalVisible} onCancel={handleModalClose} videos={videosData} /> {/* 渲染模态框组件 */}
      
    </div>
  );
};

export default VideoCarousel;