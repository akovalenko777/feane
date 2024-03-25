import { useState } from 'react'
import '../assets/css/video.scss'

export default function LazyVideo(props){
  const [showVideo, setShowVideo] = useState(false)

  function errHandler(e){
    e.target.src = `https://img.youtube.com/vi/${props.code}/sddefault.jpg`
    // e.target.onerror = null
  }

  return (
    <div className="video-wrapper">
      {!showVideo && <div className="video-splash" onClick={()=>{setShowVideo(true)}}>
        <img src={`https://img.youtube.com/vi/${props.code}/sddefault.jpg`} alt="" onError={errHandler}/>
      </div>}
      {showVideo && <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${props.code}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
    </div>
  )
}