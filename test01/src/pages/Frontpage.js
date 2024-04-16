import React, { useState } from 'react';
import { Button, Image } from 'antd';
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player';
import videosData from './videodata.json';
const FrontPage = () => {
    
    const _history = useHistory();
    
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextVideo = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videosData.length);
    };
  
    const prevVideo = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videosData.length) % videosData.length);
    };

    function _gotoHome() {
        _history.push('/Home')
        
      }


    return (


        
        <div className='container'>
            <Image
                width={1580}
                height={171}
                src="header.png"
                preview={false}>

            </Image>
            <div className='frontpage-center'>
                <div className='center-left'>
                
                    <div className="one-video" >
                <div>
                {videosData[currentIndex] && (
                <ReactPlayer className="video" url={videosData[currentIndex].url} controls width='180px' height='340px' />
                )}
                </div>
                </div>
                <div >
                    <Button className='btn-moreinfo' onClick={_gotoHome}>詳細資訊</Button>
                </div>
                </div>
                <div className='center-center'>
                    <Image
                        src="center-center.png"
                        preview={false}>
                    </Image>
                </div>
                <div className='center-right'>
                    <Image
                        src="center-right.png"
                        preview={false}>
                    </Image>
                </div>
            </div>
        </div>
    );

}
export default FrontPage;