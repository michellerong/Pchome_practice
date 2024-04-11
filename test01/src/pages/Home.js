import React from 'react';
import Video from './Video'
import Header from './Header'
import Product from './Product'
function Home() {
    return (
        <div className="wrapper">
            
            {/* 設定頁面title */}
           
                <Header/>
                <Product/>
                <Video/>
        </div>
    );
}

export default Home;