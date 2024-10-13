"use client"

import React,{useEffect,useState} from "react";

function MachesList() {


    const [ButtonList,setButtonList] = useState([{id:1,src:"https://crests.football-data.org/263.png"},{id:3,src:"https://crests.football-data.org/263.png"},{id:2,src:"https://crests.football-data.org/263.png"}]);
    const [Target,setTarget] = useState(0);

    const HandleLig = (e) =>{
        console.log("the target ",e.target.id);
        
    }

    const ReturnButtonList = ButtonList.map((e)=>{
      return <button key={e.id} className=" flex justify-center min-w-[75px] min-h-16  object-cover items-center" onClick={HandleLig}><img src={e.src} alt=""  id={e.id}/></button>
    });
    
  
    
  
    useEffect(() => {
        if(Target == 0)
            return;

        console.log("am in kid");
       
    }, [Target]);


    return (
        <div className=" z-10  w-[800px] h-[700px] border-4 rounded-xl p-3 border-teal-300 flex flex-row items-center">
  
        <div className="  min-w-[700px] h-full border-r-teal-300 border-r-4"> </div>
        <div className=" h-full min-w-[75px] flex flex-col gap-2  justify-start items-center pt-2 pl-2">{ReturnButtonList}</div>
       
        </div>
    
    );
}

export default MachesList;
