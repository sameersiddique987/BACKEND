import mongoose from "mongoose";
import User from "./user.model.js"
const shareSchema = new mongoose.Schema({


   user : {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : "User"
     },
    },
{
    timestamps : true
}
)

export default mongoose.model("Share", shareSchema);

