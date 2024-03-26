const { createComment ,getCommentById} = require("../function/Comments/comments");


    const createComments= async (req, res) => {
        const obj = {
            description: req.body.description 
        };
        console.log(req.body.description,"hh");
        try {
            const addComment = await createComment(obj);
            res.status(200).json(addComment);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }


    const getCommentsById=async (req, res) => {
        const commentId = req.params.idcommentuseroffer; 
        try {
            const comment = await getCommentById(commentId);
            if (!comment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.status(200).json(comment);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    module.exports={
        createComments,
        getCommentsById
    }
