import express from "express";

import { createPost } from "../contolers/post.controller.js";
import { creatUser } from "../contolers/user.controller.js";
import { likePost } from "../contolers/like.contrller.js";

const router = express.Router();

router.post("/createpost", createPost)
router.post("/createuser", creatUser)
router.post("/likepost/:id", likePost)
export default router;