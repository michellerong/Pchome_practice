import React, { useState } from 'react';
import { Modal, Button,Tag } from 'antd';
import ReactPlayer from 'react-player';
import { LeftOutlined, RightOutlined,HeartFilled } from '@ant-design/icons';

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
      width={700}
      height={1200}
      footer={null}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
          <Button className='prevmodal' onClick={prevVideo} icon={<LeftOutlined />}></Button>
        <ReactPlayer url={videos[currentIndex].url} controls width='270px' height='480px'/>
        <Button className='nextmodal' onClick={nextVideo} icon={<RightOutlined />}></Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button type="link"><a href={videos[currentIndex].description}>{videos[currentIndex].title}</a></Button>
        <HeartFilled style={{ color: "#ea1717" }} />
        <div>&nbsp;1.2萬</div>
        
        {/* <Button type="link" href={videos[currentIndex].link}>{videos[currentIndex].description}</Button> */}
     </div>
     <div className='tag'><Tag>#硬體周邊</Tag>
     <Tag>#筆電</Tag>
     <Tag>#多人推薦</Tag>
     <Tag>#耐用</Tag></div>
     
      
       </div>
      
        
      
    </Modal>
  );
};

export default VideosModal;
