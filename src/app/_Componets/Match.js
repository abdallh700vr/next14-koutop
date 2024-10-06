"use client"
import React from 'react'

export const Match = ({chanel,link,setCurrent,isVideo}) => {

const handleClick = ()=>{
    setCurrent({url:link,isVideo:isVideo})
}
  return (
    <button onClick={handleClick} className="flex flex-row justify-center items-center min-h-16 min-w-96 bg-black gap-4  border-b-2 border-green-300 ">
        <h1 className="text-xl font-bold ">{chanel}</h1>
        <h1 className="text-2xl text-red-500 border-red-500 border-2 rounded-lg font-bold min-h-8 text-center animate-pulse p-1 ">LIVE</h1>
    </button>
  )
}
