'use client'
import React from 'react'
import Video from 'next-video';
import a from "../videos/ad.mp4"
 import foto from "../src/app/_IMGE/foto.jpeg"
export const Ad = ({setTrigger}) => {

const handleSkip = ()=>{
    setTrigger(true)
}



  return (


    <div width="100%" height="100%">
        <button onClick={handleSkip}  className="text-green-300 text-2xl">SKİP</button>
        <Video src={a}  poster={foto} accentColor="#7FFFD4" />;
{/*      
<video width="320" height="240" controls preload="none">
      <source src={value[0]} type="video/mp4" />
    
      Your browser does not support the video tag.
    </video> */}

    </div>

  )
}
