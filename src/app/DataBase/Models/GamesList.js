import { Schema,model,models } from "mongoose";


const GamesListSchema = new Schema({
maches:[]
})



const GamesList = models.GamesList || model("GamesList",GamesListSchema);


export default GamesList;