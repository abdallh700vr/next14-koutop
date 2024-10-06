"use client"
import Video from './Video'
import React,{useState,useEffect} from 'react'
import { Match } from './Match'

let cancelAxios = null;


const Content = () => {

    const [PlayList,setPlayList] = useState([{name:"bein sport hd"},{name:"bein sport hd"}]);
    const [Current,setCurrent] = useState("")

useEffect(()=>{
console.log("am in -----------------useeffect")
const GetPlayList = async ()=>{
    try {

        const response = await axios.get("/api/playlist", {
            cancelToken: new axios.CancelToken((c)=> {
              cancelAxios = c;
            })
          })
          console.log(response,"----------------------------")
    
          setPlayList(response)
          //the frist chanel url
          setCurrent(response[0].url)
    
    } catch (error) {
        console.log(error);
    }
}
 
GetPlayList()

// return ()=>{cancelAxios()}
},[])


const List = PlayList.map((match) => {
    return <Match chanel={match.name} link={""} />
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

    <Video url={Current} />
    </>
  )
}

export default Content