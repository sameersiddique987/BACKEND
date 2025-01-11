import express from "express"
import { registerUser, loginUser , logoutUser , refreshToken, uploadImage} from "../controllers/users.controllers.js"
import upload from "../middlewere/multer.middlewere.js"
const router = express.Router()

// register user

router.post("/register",registerUser)
router.post("/login" , loginUser )
router.post("/logout" , logoutUser )
router.post("/refreshtoken" , refreshToken )
router.post("/uploadimage", upload.single(), uploadImage);


export default router