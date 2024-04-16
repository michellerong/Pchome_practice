import React from 'react';
import {  Button,Image } from 'antd';


const Header = () => {

    return(
        <div className="header-container">
{/* 
          <Button className='ant-button ' type='link'>簡介</Button>
          <Button className='ant-button' type='link'>詳情</Button>
          <Button className='ant-button' type='link'>規格說明</Button>
          <Button className='ant-button' type='link'>購物須知</Button> */}
<Image
width={1580}
height={171}
src="header.png"
preview={false}>
    
</Image>
          </div>
    );
}
export default Header;