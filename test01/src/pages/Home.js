import React from 'react';
import Video from './Video'
import Header from './Header'
function Home() {
    return (
        <div className="wrapper">
            
            {/* 設定頁面title */}
           
                <Header/>
                <Video/>
        </div>
    );
}

export default Home;