let express = require('express');
let router = express.Router();
let controller = require('../controllers/posts-controller');
let auth = require('../utils/validate-token');

router.route('/')
    .get(controller.getAllPosts)
    .post(auth.token, auth.admin, controller.createPost);

router.route('/:id')
    .get(controller.getPostById)
    .put(auth.token, auth.admin, controller.updatePost)
    .delete(auth.token, auth.admin, controller.deletePost);

router.route('/comment')
    .post(auth.token, controller.createComment);

router.route('comment/:id')
    .delete(auth.token, auth.admin, controller.deleteComment);

module.exports = router;
