import backImge from "@/app/_IMGE/background.jpg" 
import Image from "next/image"
export default function page(){
  return (
    <div className="h-screen  bg-transparent flex justify-center items-center">
     <Image src={backImge} alt="background img" className=" object-cover h-screen  -z-10  absolute" />


      <div className=" z-10  w-[800px] h-[700px] border-4 rounded-xl p-3 border-teal-300 flex flex-row items-center">
      <div className="bg-white  min-w-[600px] h-full border-r-teal-300 border-4"></div>
      <div className="bg-slate-500 h-full min-w-[150px] flex flex-col"></div>
      </div>
    </div>
  )
}


