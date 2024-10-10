import { Schema,model,models } from "mongoose";


const GamesListSchema = new Schema({
id:{
    type:Number,
    required:true
},
maches:[]
})



const GamesList = models.GamesList || model("GamesList",GamesListSchema);


export default GamesList;