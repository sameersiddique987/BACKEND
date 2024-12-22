import mongoose from "mongoose";
import User from "./user.model.js"
const postSchema = new mongoose.Schema({

   contant : {
    type : String,
    required : true
   },

   author : {
    type : mongoose.Schema.Types.ObjectId , ref : User ,  required : true
   },

   likes : [{
    type : mongoose.Schema.Types.ObjectId , ref : User
   }],

   sheres : [{
    type : mongoose.Schema.Types.ObjectId , ref : User
   }],

   comments : [{
    User : {type : mongoose.Schema.Types.ObjectId , ref : User},
    text : {type : String , ref : User},
    ceatedAt : {type : Date , default : Date.now}
   }]
    
   
},
{
    timestamps : true
}
)

export default mongoose.model("Post", postSchema);

