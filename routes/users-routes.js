let express = require('express');
let router = express.Router();
let controller = require('../controllers/users-controller');
let auth = require('../utils/validate-token');


/**
 * @typedef User
 * @property {string} name.required
 * @property {string} firstname.required
 * @property {string} mail.required
 * @property {string} password.required
 * @property {boolean} admin
 * @property {string} status
 */

/**
 * List users
 * @route GET /api/users/
 * @group users - Operations about users
 * @returns {Array.<User>} 200 - An array of users
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/users/
 * @group users - Operations about users
 * @param {User} event - User to insert
 * @returns {User} 200 - User created
 * @returns {Error} - Unexpected error
 */
//router.get('/', controller.getAllUsers);
router.route('/')
    .get(controller.getAllUsers)
    .post(controller.createUser);
/**
 * @route GET /api/users/:id
 * @group users - Operations about users
 * @param {string} id - id to find user
 * @returns {Array.<User>} 200 - A user
 * @returns {Error} - Unexpected error
 */
/**
 * @route PUT /api/users/:id
 * @group users - Operations about users
 * @param {string} id - id to update user
 * @param {User} user - User to update
 * @returns {User} 200 - User updated
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
    .get(controller.getUserById)
    .put(auth.token, auth.self, controller.updateUser);

module.exports = router;
