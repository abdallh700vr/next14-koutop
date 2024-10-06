import {Schema,model,models} from "mongoose"

const PlayListSchema = new Schema({

    id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const PlayList = models.PlayList || model("PlayList",PlayListSchema);


export default PlayList;