import mongoose from "mongoose";
import Student from "../models/student.model.js";
import Course from "../models/course.model.js";


import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, 
//   auth: {
//     user: "tommie.olson8@ethereal.email",
//     pass: "ZgkTyTjEVS3GGszRDF",
//   },
// });

// 

const addStudent = async (req , res) => {
    const {fullName , email , enrolledCourse} = req.body;
    if(!fullName) return res.status(404).json({message : "Fullname is required"});
    if(!email) return res.status(404).json({message : "Email is required"});
    const student = await Student.create({
        fullName,
        email,
        enrolledCourse
    })

    const course = await Course.findByIdAndUpdate(enrolledCourse ,
         {$push : {enrolledStudents : student._id}})
         res.json({message: "student added successfully"})
}


const getStudent = async (req , res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message : "id not valid"})
    
   const student = await Student.findById(id).populate("enrolledCourse")
   if(!student) return res.status(404).json({message : "student not found"})

    res.status(200).json(student)
}

// pagination

const getAllstudent = async (req , res) => {
    try {
        
        const page = req.query.page || 1;
        const limit = req.query.limit || 3;
        const skip = (page - 1) * limit;
        const student = await Student.find({}).skip(skip).limit(limit);
        res.json({data : student , length : student.length})
    }
 catch (error) {
    res.json(error)
}

}




// Create transport at the top
const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MAILTRAP_USER, // Store in .env file
        pass: process.env.MAILTRAP_PASS, // Store in .env file
    },
});

const sendEmail = async (req, res) => {
    try {
        const info = await transport.sendMail({
            from: '"Tommie Olson 👻" <tommie.olson8@ethereal.email>', // sender address
            to: "sameersiddique301@gmail.com", // list of receivers
            subject: "Congratulation! Benizar income support (SINDH BANK)✔",
            text: "Mubarak ho appka benazir income support ma 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03221767616 ma bhejain or inaam hasil krain", // plain text body
            html: "<b>Mubarak ho! Benazir Income Support ka inaam jeeta.</b>", // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error.message);
        res.status(500).send({ message: "Email not sent", error: error.message });
    }
};

export {addStudent , getStudent , getAllstudent , sendEmail}