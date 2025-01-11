import Post from "../models/post.model.js";

const addComment = async (req , res) => {
   try {
    const {postId} = req.params;
    const {userId , text} = req.body;
    const post = await Post.findById(userId)

    if (!post) {
        res.status(404).json({message : "post not found"})
    }
    const newcomment = {
        user : userId ,
        text
    }
    post.comments.posh(newcomment)
    await post.save()
    res.status(201).json({ message: 'Comment added successfully', post });
   } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
   }

}

export default addComment