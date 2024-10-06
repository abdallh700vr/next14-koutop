"use client"
import React from 'react'

export const Iframe = ({url}) => {


  return (<div className=" w-full">
 <iframe width="100%" height="100%" src={url} id="iframe" title="Video Oynatıcı" frameborder="0" scrolling="no" allowfullscreen="" ></iframe> 
  </div>
    
  )
}
