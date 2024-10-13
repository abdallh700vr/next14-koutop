
import backImge from "@/app/_IMGE/background.jpg" 
import Image from "next/image"
import MachesList from "./MachesList"
export default function page(){
  

  return (
    <div className="h-screen  bg-transparent flex justify-center items-center">
     <Image src={backImge} alt="background img" className=" object-cover h-screen  -z-10  absolute" />


      <MachesList/>
    </div>
  )
}


