import Post from "../models/post.model.js";

const createPost = async (req , res) => {
   try {
    const {contant , author} = req.body;
    if(!contant) return res.status(404).json({message : "contant not found"})
    if(!author) return res.status(404).json({message : "author not found"})
    const post = await Post.create({contant , author})

    res.status(200).json({ success : true, post})
   } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching posts', error})
   }
}

export {createPost}