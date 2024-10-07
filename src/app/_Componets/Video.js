'use client'
import Video from "next-video"
import React,{useState} from 'react'

const VideoStream = ({url}) => {



  return (
    <div className="min-h-[700px] flex-1">
             <div width="100%" height="100%">
            <Video src={url}  poster={""} accentColor="#7FFFD4" width={"100%"} />;
    {/*      
    <video width="320" height="240" controls preload="none">
          <source src={value[0]} type="video/mp4" />
        
          Your browser does not support the video tag.
        </video> */}

    </div>
  </div>


  )
}

export default VideoStream