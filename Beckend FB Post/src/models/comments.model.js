import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
   user : {
    type : mongoose.Schema.Types.ObjectId,
    text : String,
    required : true,
    ref : "User"
   }
},
{
    timestamps : true
}
)

export default mongoose.model("Comment", commentSchema);

