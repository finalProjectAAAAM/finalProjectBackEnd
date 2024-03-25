const express = require('express');
const router = express.Router();
const commentcontroller=require('../controller/controllercomment');

router.post('/createComment', commentcontroller.createComments);
router.get('/getCommentById/:idcommentuseroffer',commentcontroller.getCommentsById)


module.exports = router