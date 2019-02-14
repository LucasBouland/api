let express = require('express');
let router = express.Router();
let controller = require('../controllers/users-controller');
let auth = require('../utils/validate-token');

//router.get('/', controller.getAllUsers);
router.route('/')
    .get(controller.getAllUsers)
    .post(auth.admin, controller.createUser);

router.route('/:id')
    .get(controller.getUserById)
    .put(auth.admin, controller.updateUser)

module.exports = router;