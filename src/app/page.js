
import Video from "../../_Componets/Video";

export default function Home() {

  

  return (
      <main className="flex flex-col gap-2 justify-center row-start-2 items-center sm:items-start  min-w-screen p-0 m-0">

     <div className="bg-white flex flex-row min-w-full gap-2 border-green-300 border-b-2 p-0 m-0">
      
     <div className="bg-red-400 min-h-[600px] min-w-80 flex flex-col ">
      <div className="min-h-[300px] min-w-80 border-gray-100 border-4">erg</div>
      <div className="min-h-[300px] min-w-80">erg</div>
      </div>


     <div className="flex flex-col justify-center items-center min-h-[700px] min-w-96 bg-red-600">
      <div className="border-2 border-green-400  min-h-[200px]  min-w-96"> 
        
      </div>
      <div className="border-2 flex-1 border-green-400  min-h-[500px]  min-w-96">

      </div>

     </div>


   
      <Video/>
    

     </div>

     <div className="w-full  bg-white flex flex-row justify-around min-h-40  gap-1 p-0 m-0">
      <div className="min-h-36 bg-red-500 min-w-[500px]">sdc</div>
      <div className="min-h-36 bg-red-500 min-w-[500px]">sdc</div>
      <div className="min-h-36 bg-red-500 min-w-[500px]">sdc</div>
     </div>

      {/* <iframe width="100%" height="100%" src="https://iframeri.strmrdrfrooc.click/index.php?id=3450#poster=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fcrtswp-s-min.png&amp;reklamResim=https%3A%2F%2Fwww.selcuksportshd1374.xyz%2Fimg%2Fg%2Fpshg-min-min.gif&amp;reklamGidis=https%3A%2F%2Fcutt.ly%2Fselcuksportspsh" id="iframe" title="Video Oynatıcı" frameborder="0" scrolling="no" allowfullscreen="" ></iframe> */}
      </main>
  );
}
