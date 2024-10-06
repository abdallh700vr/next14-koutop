import { NextResponse } from "next/server";
 import PlayList from "@/app/DataBase/Models/PlayList";
import connect from "@/app/DataBase/lib/dbConnect";



export async function GET(req) {
  
    //control if the token valid


    return NextResponse.json({status:200});
}

/*
METHOD : POST;
TARGET: to create a video
*/


export async function POST(req){
   

await connect()

const {id,url,name} = await req.json();

const newPlaylist = new PlayList({id,url,name});
await newPlaylist.save();


 //control if the token valid

   return  NextResponse.json(newPlaylist,{status:201});

}


/*
METHOD : DELETE;
TARGET: to delete a video
*/
export async function DELETE(req){

 //control if the token valid

    return NextResponse.json({message:"the video delete successfully"});
}