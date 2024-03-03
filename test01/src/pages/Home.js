import ReactPlayer from 'react-player';

function Home() {
    return (
        <div className="wrapper">
            {/* 設定頁面title */}
           
                <h2>首頁</h2>
                <ReactPlayer
        url="https://youtube.com/shorts/o47ZmlA-CBE?si=y7zf6kCLS5si0m92"  // 或者本地视频文件路径
        controls={true}
        width="150px"
        height="400px"
      />
            {/* component */}
            
        </div>
    );
}

export default Home;