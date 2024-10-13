import { NextResponse } from "next/server";
import connect from "@/app/DataBase/lib/dbConnect";
import axios from "axios";
import GamesList from "@/app/DataBase/Models/GamesList";
// to get laliga and preimeir lig today maches
export async function POST(req) {
   
    await connect();
    
    const date = new Date()
    const day = date.getDate()<10 ?  "0"+String(date.getDate()) : date.getDate()
    const day7 = date.getDate()+7<10 ?  "0"+String(date.getDate()+7) : date.getDate()+7
    const month = String(date.getMonth()+1)//bc getmonth start from 0 this why +1
    const year = String(date.getFullYear())
    const FromDate = `${year}-${month}-${day}`
    const ToDate = `${year}-${month}-${day7}`
    try {



    // const LaligaStatus = await Laliga(FromDate,ToDate);
    //  const preimeirStatus = await premier(FromDate,ToDate);
     const ChampionsStatus = await Champions(FromDate,ToDate);
    // const IraqStatus = await Iraq(FromDate,ToDate);



    return NextResponse.json({status:200})
      
    } catch (error) {
      console.log("the error from Post : ",error.message)
      return NextResponse.json({error:error},{status:400});
    }


   
    
}


async function  Laliga (Fromdate,toDate) {

  try {
   
    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PD/matches`, {
      headers: {
        'X-Auth-Token':process.env.API_KEY,
      },
      params: {
          dateFrom: Fromdate,
          dateTo: toDate,
        },
    })

       const maches = data.data.matches;

       const id = 1;

     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {LalgiaStatus:data.status}
    } catch (error) {
      
       console.log("the error ",error)
       return {LalgiaStatus:400};
    }
    
}


async function   premier (Fromdate,toDate) {

  try {

    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PL/matches`, {
        headers: {
          'X-Auth-Token':process.env.API_KEY,
        },
        params: {
            dateFrom: Fromdate,
            dateTo: toDate,
          },
      })

       const maches = data.data.matches;
       const id = 2;
      
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {premier:data.status}
    } catch (error) {
      
       console.log("the error ",error)
       return {premier:400}
    }
    
}



async function   Champions(Fromdate,toDate) {

  try {

    const data  =  await axios.get(`https://api.football-data.org/v4/competitions/PL/matches`, {
      headers: {
        'X-Auth-Token':process.env.API_KEY,
      },
    })
     
       const maches = data.data.matches;
       const id = 3;
      
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {ChampionsL:data.status}
    } catch (error) {
      
       console.log("the error ",error.message)
       return {Champions:400}
    }
    
}


async function  Iraq (Fromdate,toDate) {

  try {

    const data  =  await axios.get(`https://apiv2.allsportsapi.com/football`,{
      params:{
        met:"Fixtures",
        APIkey:"5f714a546bb936be3d7cbfd94338c919602b2c6a124313d21281fb548e3ea768",
        from:Fromdate,
        to:toDate,
        teamId:642
      }
    })

       const maches = data.data.result;
       const id = 4;
      

    
     const newGameList  =  new GamesList({id,maches});
      await newGameList.save();




        return {IraqStatus:data.status}
    } catch (error) {
      
       console.log("the error ",error)
       return {IraqStatus:400}
    }
    
}



