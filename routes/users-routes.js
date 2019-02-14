let express = require('express');
let router = express.Router();
let controller = require('../controllers/users-controller');
let auth = require('../utils/validate-token');

//router.get('/', controller.getAllUsers);
router.route('/')
    .get(controller.getAllUsers)
    .post(controller.createUser);

router.route('/:id')
    .get(controller.getUserById)
    .put(auth.token, controller.updateUser);

module.exports = router;
