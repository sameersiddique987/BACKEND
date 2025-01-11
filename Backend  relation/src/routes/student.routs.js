import express from "express";
import { addStudent, getAllstudent, getStudent, sendEmail } from "../contolers/student.controller.js";


const router = express.Router();

router.post("/student", addStudent);
router.get("/getstudent/:id", getStudent);
router.get("/getAllstudent", getAllstudent);
router.get("/sendEmail", sendEmail);
export default router;