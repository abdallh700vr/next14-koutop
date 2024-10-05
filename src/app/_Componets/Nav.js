
import Image from "next/image";
import kura from "@/app/_IMGE/kura.png"

 const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center h-16 min-w-screen border-green-300 border-b-2 p-3">
      <Image
      src={kura}
      width={200}
      height={60}
      className="bg-black"
      alt="Picture of the author"
    />


    <h1 className="text-3xl text-green-300 animate-bounce ">THE BEST İN MİDDLE EAST</h1>


    <button className="  text-center  min-w-40">
    <a href="https://www.telegram.com" className="text-2xl text-center min-w-40 text-green-300 font-bold animate-pulse ">للإعلانات</a>
    </button>
 

    </div>
  )
}


export default Nav;