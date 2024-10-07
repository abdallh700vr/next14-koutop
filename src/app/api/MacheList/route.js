import { NextResponse } from "next/server";
import connect from "@/app/DataBase/lib/dbConnect";
import axios from "axios";
import GamesList from "@/app/DataBase/Models/GamesList";
// to get laliga and preimeir lig today maches
export async function POST(req) {
     await connect();

    
    const date = new Date()
    const day = date.getDate()<10 ?  "0"+String(date.getDate()) : date.getDate()
    const month = String(date.getMonth()+1)//bc getmonth start from 0 this why +1
    const year = String(date.getFullYear())
    const TargetDate = `${year}-${month}-${day}`





    try {

    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PD/matches`, {
        headers: {
          'X-Auth-Token':process.env.API_KEY,
        },
        params: {
            dateFrom: "2024-10-19",
            dateTo: "2024-10-19",
          },
      })

       const maches = data.data.matches;
      
     const newGameList  =  new GamesList({maches});
      await newGameList.save();




        return NextResponse.json({status:"good"})
    } catch (error) {

        return NextResponse.json({message:error.message},{status:500});
    }
    
    
}
