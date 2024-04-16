import React, { useState } from 'react';
import { Carousel, Button, Checkbox, Image, Space, Dropdown } from 'antd';
import ReactPlayer from 'react-player';
import { LeftOutlined, RightOutlined, DownOutlined, HeartFilled } from '@ant-design/icons';

import VideoModal from './VideoModal';
import videosData from './videodata.json'; // 假設路徑根據實際情況調整

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState(null);

  /* 下拉式選單加購數量*/
  const items = [
    {
      key: '1',
      label: '1'
    },
    {
      key: '2',
      label: '2'
    },
    {
      key: '3',
      label: '3'
    },
    {
      key: '4',
      label: '4',
    },
  ];
  const [quantity, setQuantity] = useState(null);
  /* CheckBox */
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
    setQuantity(null); // 清除選擇的數量
  };
  const plainOptions = ['1', '2', '3'];
  const handleMenuClick = ({ key }) => {

    setQuantity(parseInt(key, 10));

  };

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
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div className="short-container">


      <div className='carousel-container'>

        <div className='left-container'>

          <Image
            width={180}
            height={560}
            src="left.png"
            preview={false}>
          </Image>
          <Image
            width={180}
            height={560}
            src="left2.png"
            preview={false}>
          </Image>
          <Image
            width={180}
            height={560}
            src="left3.png"
            preview={false}>
          </Image>
        </div>
        <div className='center-container'>
          <div className='view-more' >
            <div className='product-title'>相關推薦商品</div>
            {/* <Button className='btn-more' type='primary' onClick={handleViewMore}>查看更多</Button> */}

          </div>
          <div>
            <Button className='prev' onClick={prevVideos} icon={<LeftOutlined />} />
            <Button className='next' onClick={nextVideos} icon={<RightOutlined />} />

            <Carousel className="carousel" afterChange={nextVideos} slidesToShow={3} slidesToScroll={2} >
              {currentVideos.map((video, index) => (
                <div className="video-slide" key={index}>
                  {video && (
                    <div >
                      <ReactPlayer className="video" url={video.url} controls width='180px' height='320px' />
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox checked={checkboxChecked} onChange={handleCheckboxChange} />
                        <div className='link'><Button type="link"><a href={video.description}>{video.title}</a></Button> </div>
                        <HeartFilled style={{ color: "#eb2f96" }} />
                        <div>&nbsp;1.2萬</div>
                      </div>
                      <div>
                        <Dropdown
                          menu={{
                            overlayStyle: { width: 'auto' },
                            items,
                            onClick: handleMenuClick
                          }}
                          disabled={!checkboxChecked}
                        >
                          <Button><a onClick={(e) => e.preventDefault()}>
                            <Space>
                              {quantity || '請選擇數量'}
                              <DownOutlined />
                            </Space>
                          </a></Button>
                        </Dropdown>

                      </div><div style={{ fontSize: '15px', marginTop: '10px' }}>選擇加購{quantity}件商品</div>

                    </div>


                  )}
                  
                </div>
              ))}

            </Carousel>
            
            <Button className='btn-more' type='primary' onClick={handleViewMore}>查看更多</Button>
          </div>
          <><Image
            width={900}
            height={500}
            src="product-more.png"
            preview={false}
            style={{marginLeft:'30px'}}>

          </Image></>
          <><Image
            width={900}
            height={500}
            src="product-more2.png"
            preview={false}
            style={{marginLeft:'30px'}}>

          </Image></>
        </div>


        <VideoModal visible={modalVisible} onCancel={handleModalClose} videos={videosData} /> {/* 渲染模态框组件 */}

      </div>
    </div>
  );
};

export default VideoCarousel;