import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import more from '../../assets/more.png'
import profile from '../../assets/Profile1.jpg'
import user_profile from '../../assets/user_profile.jpg'
import { value_converter } from '../../data'
import { API_KEY } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

 
const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData,setApiData] =useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData =async() =>{
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }

    const fetchOtherData = async () =>{
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])


  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h5>{apiData?apiData.snippet.title:"Laufey- Snow White (Official Music Video)"}</h5>
      <div className='video-content'>
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div> 
                <p>{apiData?apiData.snippet.channelTitle:"HAHA Podcast"}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="play-video-info">
                <button className='like'><img src={like} alt="like.png" />{apiData?value_converter(apiData.statistics.likeCount):155}</button>
                <button className='dislike'><img src={dislike} alt="dislike.png" /></button>
                <button className='share'><img src={share} alt="share.png" />Share</button>
                <button className='more'><img src={more} alt="more.png" /></button>
        </div>
      </div>
      <div className='vid-description'>
        <div className='description'>
            <h6>
            {apiData
                ? `${value_converter(apiData.statistics.viewCount)} views • ${moment(apiData.snippet.publishedAt).fromNow()}`
                : "16K views • 1 day ago"}
            </h6>
            <p>{apiData?apiData.snippet.description.slice(0, 250):"Channel that healing your Mental Health"}</p>
        </div>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):999 } Comments</h4>
        {commentData.map((item,index)=>{
            return(
                <div key={index} className='comment'>
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                            <img src={like} alt="like.png" />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="dislike.png" />
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default PlayVideo
