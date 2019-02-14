let express = require('express');
let router = express.Router();
let controller = require('../controllers/posts-controller');
let auth = require('../utils/validate-token');

/**
 * @typedef Post
 * @property {string} title.required
 * @property {string} content.required
 * @property {string} author.required
 * @property {comments} Comment
 */

/**
 * @typedef Comment
 * @property {string} post.required
 * @property {string} content.required
 * @property {string} author.required
 */

/**
 * Search events
 * @route GET /api/posts
 * @group posts - Operations about posts
 * @returns {Array.<Post>} 200 - An array of posts
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/posts
 * @group posts - Operations about posts
 * @param {Post} post - Post to insert
 * @returns {Post} 200 - Post created
 * @returns {Error} - Unexpected error
 */
router.route('/')
    .get(controller.getAllPosts)
    .post(auth.token, auth.admin, controller.createPost);
/**
 * @route GET /api/posts/:id
 * @group posts - Operations about posts
 * @returns {Array.<Post>} 200 - An array of posts
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/posts/:id
 * @group posts - Operations about posts
 * @param {Post} event - Post to insert
 * @returns {Post} 200 - Post created
 * @returns {Error} - Unexpected error
 */
/**
 * @route DELETE /api/posts/:id
 * @group posts - Operations about posts
 * @param {string} id - id to remove post
 * @returns {Post} 200 - Post deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
    .get(controller.getPostById)
    .put(auth.token, auth.admin, controller.updatePost)
    .delete(auth.token, auth.admin, controller.deletePost);
/**
 * @route POST /api/posts/comments
 * @group posts - Operations about posts
 * @param {Comment} event - Comment to insert
 * @returns {Post} 200 - Comment created
 * @returns {Error} - Unexpected error
 */
router.route('/comments')
    .post(auth.token, controller.createComment);

/**
 * @route DELETE /api/posts/comments/:id
 * @group posts - Operations about posts
 * @param {string} id - id to remove comment
 * @returns {Comment} 200 - Comment deleted
 * @returns {Error} - Unexpected error
 */
router.route('/comments/:id')
    .delete(auth.token, auth.admin, controller.deleteComment);

module.exports = router;
