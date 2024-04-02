import React from 'react';
import {  Button } from 'antd';


const Header = () => {

    return(
        <div className="header-container">

          <Button className='ant-button ' type='link'>簡介</Button>
          <Button className='ant-button' type='link'>詳情</Button>
          <Button className='ant-button' type='link'>規格說明</Button>
          <Button className='ant-button' type='link'>購物須知</Button>
          </div>
    );
}
export default Header;