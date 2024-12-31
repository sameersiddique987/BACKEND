import Post from "../models/post.model.js";


const likePost = async (req , res) => {
    try {
        const {postId} = req.params;
    const {userId} = req.body;
    if(!postId || !userId) return res.status(404).json({ message: "Post ID and User ID are required" })

    //  user ne olready like tw nahe kia hua

        const post = await Post.findById(postId);
    if (post.likes.some(like => like.user.toString() === userId)) {
      return res.status(400).json({ message: "User has already liked this post" });
    }

    await Post.findByIdAndUpdate(
        postId,
        { $push: { likes: { user: userId } } },
        { new: true }
      );
  
      res.status(200).json({ message: "Post liked successfully" });

    } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }

}

export {likePost}