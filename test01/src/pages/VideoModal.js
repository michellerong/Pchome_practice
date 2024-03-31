import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player';

const VideosModal = ({ visible, onCancel, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const prevVideo = () => {
    const newIndex = currentIndex - 1 < 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ReactPlayer url={videos[currentIndex].url} controls width='180px' height='320px'/>
        <Button type="link"><a href={videos[currentIndex].description}>{videos[currentIndex].title}</a></Button>
        {/* <Button type="link" href={videos[currentIndex].link}>{videos[currentIndex].description}</Button> */}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button onClick={prevVideo}>上一個</Button>
        <Button onClick={nextVideo}>下一個</Button>
      </div>
    </Modal>
  );
};

export default VideosModal;
