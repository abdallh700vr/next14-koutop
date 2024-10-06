"use client"
import VideoStream from './Video'
import React,{useState,useEffect} from 'react'
import { Match } from './Match'
import { Iframe } from './Iframe'
import { useRouter } from 'next/router'

const Content = () => {

    const [PlayList,setPlayList] = useState([]);
    const [Current,setCurrent] = useState({url:"",isVideo:false})
    const path = useRouter()

useEffect(()=>{

  const Link = path.pathname
console.log("am in -----------------useeffect")
const GetPlayList = async ()=>{
    try {

        const response = await fetch(`${Link}/api/playlist`, {
            method:"GET"
          })

          const data = await response.json()
         
    
          setPlayList(data)
          //the frist chanel url
          setCurrent({url:data[0].url,isVideo:data[0].isVideo})
    
    } catch (error) {
        console.log(error);
    }
}
 
GetPlayList()


},[])


const List = PlayList.map((match) => {
    return <Match id={match.id} chanel={match.name} link={match.url} isVideo={match.isVideo} setCurrent={setCurrent} />
})


  return (
    <>

    <div className="flex flex-col justify-center items-center min-h-[700px] min-w-96 bg-red-600">
      <div className="border-2 border-green-400  min-h-[200px]  min-w-96"> 
        
      </div>
      <div className="border-2 flex-1 flex flex-col border-green-400  min-h-[500px]  min-w-96 overflow-y-auto gap-1 pt-1">
        {List}
      </div>

    </div>


    {Current.isVideo ?  <VideoStream url={Current.url} /> : <Iframe url={Current.url} />}
  


    </>
  )
}

export default Content


{/* <iframe width="100%" height="100%" src="https://iframeri.strmrdrfrooc.click/index.php?id=3450#poster=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fcrtswp-s-min.png&amp;reklamResim=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fpshg-min-min.gif&amp;reklamGidis=https%3A%2F%2Fcutt.ly%2Fselcuksportspsh" id="iframe" title="Video Oynatıcı" frameborder="0" scrolling="no" allowfullscreen="" ></iframe> */}