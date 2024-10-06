import { NextResponse } from "next/server";
 import PlayList from "@/app/DataBase/Models/PlayList";
import connect from "@/app/DataBase/lib/dbConnect";
import { v4 as uuidv4 } from "uuid";


export async function GET() {
try {
    await connect()
    

    const PlayListArray = await PlayList.find()


    return NextResponse.json(PlayListArray,{status:200});


} catch (error) {
    console.log("\n\n----------------------------\”",error.message)
}
}

/*
METHOD : POST;
TARGET: to create a video
*/


export async function POST(req){
await connect()

const {url,name,isVideo} = await req.json();

const id = uuidv4();

const newPlaylist = new PlayList({id,url,name,isVideo});
await newPlaylist.save();


 //control if the token valid

   return  NextResponse.json(newPlaylist,{status:201});

}


/*
METHOD : DELETE;
TARGET: to delete a video
*/
export async function DELETE(req){
    await connect()

 //control if the token valid

    return NextResponse.json({message:"the video delete successfully"});
}