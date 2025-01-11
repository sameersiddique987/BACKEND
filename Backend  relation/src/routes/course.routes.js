import express from "express"
import { addCourse, getCourse } from "../contolers/course.controller.js"

const router = express.Router();


router.post("/addcorse" ,addCourse )
router.get("/getcourse" ,getCourse )

export default router