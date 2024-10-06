'use client'

import React,{useState} from 'react'

import { Ad } from './Ad'
const Video = ({url}) => {

const [trigger,setTrigger] = useState(false)



  return (
    <div className="min-h-[700px] flex-1">
        {trigger ?  <iframe width="100%" height="100%" src="https://iframeri.strmrdrfrooc.click/index.php?id=3450#poster=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fcrtswp-s-min.png&amp;reklamResim=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fpshg-min-min.gif&amp;reklamGidis=https%3A%2F%2Fcutt.ly%2Fselcuksportspsh" id="iframe" title="Video Oynatıcı" frameborder="0" scrolling="no" allowfullscreen="" ></iframe> : <Ad setTrigger={setTrigger} /> }
  </div>


  )
}

export default Video