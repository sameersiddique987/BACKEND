import express from "express";

import { createPost } from "../contolers/post.controller.js";
import { creatUser } from "../contolers/user.controller.js";

const router = express.Router();

router.post("/createpost", createPost)
router.post("/createuser", creatUser)
export default router;