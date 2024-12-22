import mongoose from "mongoose";

const userScema = new mongoose.Schema({
   name : {
    type : String , 
    required : true
   },
   email : {
    type : String,
    required : true
   },
   password : {
    type : String,
    required : true
   },
   profilePic : {
   type : String,
   default: ""

   },
   createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});




export default mongoose.model("User", userScema);