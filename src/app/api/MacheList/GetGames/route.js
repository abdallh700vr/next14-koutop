import { NextResponse } from "next/server";
import connect from "@/app/DataBase/lib/dbConnect";
import GamesList from "@/app/DataBase/Models/GamesList";
export async function GET(req) {
     
try {
    
    await connect();
    
    const id = req.nextUrl.searchParams.get("id")
    const data = await GamesList.find({id:id});



    return NextResponse.json({data:data},{status:200})
} catch (error) {
    console.log(error)
    return NextResponse.json({status:400})
}




      
 


   
    
}