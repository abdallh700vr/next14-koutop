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
    const TargetDate = `${year}-${month}-${day+1}`

    try {



    const LaligaStatus = await Laliga(TargetDate);
    const preimeirStatus = await premier(TargetDate);
    const ChampionsStatus = await Champions(TargetDate);
    const IraqStatus = await Iraq();



    return NextResponse.json({
      LaligaStatus:LaligaStatus,
      preimeirStatus:preimeirStatus,
      ChampionsStatus:ChampionsStatus,
      IraqStatus:IraqStatus
    },{status:200})
      
    } catch (error) {
      console.log("the error from Post : ",error.message)
      return NextResponse.json({error:error},{status:400});
    }


   
    
}


async function  Laliga (date) {

  try {
    console.log(date)
    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PD/matches`, {
        headers: {
          'X-Auth-Token':process.env.API_KEY,
        },
        params: {
            dateFrom: date,
            dateTo: date,
          },
      })

       const maches = data.data.matches;

       const id = 1;

     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {LalgiaStatus:data.status}
    } catch (error) {
      
       console.log("the error ",error.message)
       return {LalgiaStatus:400};
    }
    
}


async function   premier (date) {

  try {

    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PL/matches`, {
        headers: {
          'X-Auth-Token':process.env.API_KEY,
        },
        params: {
            dateFrom: date,
            dateTo: date,
          },
      })

       const maches = data.data.matches;
       const id = 2;
      
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {LalgiaStatus:data.status}
    } catch (error) {
      
       console.log("the error ",error.message)
       return {LalgiaStatus:400}
    }
    
}



async function   Champions(date) {

  try {

    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/CL/matches`, {
        headers: {
          'X-Auth-Token':process.env.API_KEY,
        },
        params: {
            dateFrom: date,
            dateTo: date,
          },
      })

       const maches = data.data.matches;
       const id = 3;
      
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {ChampionsL:data.status}
    } catch (error) {
      
       console.log("the error ",error.message)
       return {LalgiaStatus:400}
    }
    
}


async function  Iraq () {

  try {

    const data  =  await axios.get(process.env.APİ_IRAQ)

       const maches = data.data.result;
       const id = 4;
      
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {IraqStatus:data.status}
    } catch (error) {
      
       console.log("the error ",error.message)
       return {LalgiaStatus:400}
    }
    
}



