import mongoose from "mongoose";


const connect = async() => {


  
if(mongoose.connections[0].readyState)
{

  return true
}


try {
   await mongoose.connect(process.env.MONGO_URL)
   console.log("\n\n-----------------------mongodb connected");
  return true;
    
} catch (error) {
  console.log("\n\n----------------------------\”",error.message)
}


}


export default connect

