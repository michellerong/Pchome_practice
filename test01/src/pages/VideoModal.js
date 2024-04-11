import React, { useState } from 'react';
import { Modal, Button,Tag } from 'antd';
import ReactPlayer from 'react-player';
import { LeftOutlined, RightOutlined,HeartTwoTone } from '@ant-design/icons';

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
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button type="link"><a href={videos[currentIndex].description}>{videos[currentIndex].title}</a></Button>
        <HeartTwoTone twoToneColor="#eb2f96" />
        <div>&nbsp;1.2萬</div>
        
        {/* <Button type="link" href={videos[currentIndex].link}>{videos[currentIndex].description}</Button> */}
     </div>
     <div className='tag'><Tag>#硬體周邊</Tag>
     <Tag>#筆電</Tag>
     <Tag>#多人推薦</Tag>
     <Tag>#耐用</Tag></div>
       </div>
      
        <Button className='prev' onClick={prevVideo} icon={<LeftOutlined />}></Button>
        <Button className='next' onClick={nextVideo} icon={<RightOutlined />}></Button>
      
    </Modal>
  );
};

export default VideosModal;
