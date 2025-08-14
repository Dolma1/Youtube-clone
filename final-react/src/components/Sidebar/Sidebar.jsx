import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import shorts from '../../assets/shorts.png'
import subscribe from '../../assets/Subscribe.png'
import profile from '../../assets/user.png'
import download from '../../assets/download.png'
import history from '../../assets/history.png'
import playlist from '../../assets/playlist.png'
import video from '../../assets/yourvideo.png'
import watchlater from '../../assets/watchlater.png'
import like from '../../assets/like.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='sortcut-links'></div>
        <div className="side-link" >
            <img src={home} alt="" />
            <p>Home</p>
        </div>

        <div className="side-link" >
            <img src={shorts} alt="" />
            <p>Shorts</p>
        </div>

        <div class="side-link" >
            <img src={subscribe} alt="" />
            <p>Subscriptions</p>
        </div>

        {/* <hr /> */}
        {/* <div className="side-menu">
            <h4>You </h4>
            <div class="side-you" >
                <img src={history} alt="" />
                <p>History</p>
            </div>
            <div class="side-you" >
                <img src={playlist} alt="" />
                <p>Playlist</p>
            </div>
            <div class="side-you" >
                <img src={video} alt="" />
                <p>Your videos</p>
            </div>
            <div class="side-you" >
                <img src={watchlater} alt="" />
                <p>Watch later</p>
            </div>
             <div class="side-you" >
                <img src={video} alt="" />
                <p>Your videos</p>
            </div> */}
            <div class="side-link">
                <img src={profile} alt="" />
                <p>You</p>
            </div>

            <div className="side-link">
                <img src={download} alt="" />
                <p>Downloads</p>
            </div>

        {/* </div> */}

        {/* <hr />
        <div className='subscriptions '>

        </div> */}

        
    </div>
  )
}

export default Sidebar
