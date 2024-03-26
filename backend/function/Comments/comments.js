const { commentuseroffer } = require('../../database/models/commentuseroffer'); 
// const description= require('../../database/models/commentuseroffer'); 

const createComment = async (req, res) => {
    try {
      const description = req.body?.description || "";
  
      const newComment = await commentuseroffer.create({
        description,
      });
  
      if (!newComment || typeof newComment !== 'object') {
        throw new Error('Unexpected response from commentuseroffer.create');
      }
  
      const newCommentStatus = newComment?.status || 200;
  
      res.status(newCommentStatus).json(newComment);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error?.message || "Internal Server Error" });
    }
  };
  


  const getCommentById = async (req, res) => {
    try {
      const commentId = req.params?.idcommentuseroffer; 
  
      if (!commentId) {
        return res.status(400).json({ error: "Missing comment ID" }); 
      }
  
      const comment = await commentuseroffer.findByPk(commentId);
      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.status(200).json(comment);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports={
    createComment,
    getCommentById
}