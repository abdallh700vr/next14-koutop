import mongoose from "mongoose";


const connect = async() => {


  
if(mongoose.connections[0].readyState)
{

  return true
}


try {
   await mongoose.connect("mongodb+srv://kurasporthd:wIEBqpsePcvheHHE@cluster0.pkmjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("\n\n-----------------------mongodb connected");
  return true;
    
} catch (error) {
  console.log("\n\n----------------------------\”",error.message)
}


}


export default connect