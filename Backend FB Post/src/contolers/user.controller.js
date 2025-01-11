import mongoose  from "mongoose";
import User from "../models/user.model.js";

const creatUser = async (req , res) => {
   try {
    const {name , email , password } = req.body
    if(!name) return res.status(404).json({message : "name is requried"})
    if(!email) return res.status(404).json({message : "email is requried"})
    if(!password) return res.status(404).json({message : "password is requried"})
     const user = await User.create({
     name,
     email,
     password
    })
    res.status(200).json(user)
   } catch (error) {
      console.error("Error creating user:", error); 
      res.status(500).json({ message: "Internal Server Error" });
   }
}

export {creatUser}