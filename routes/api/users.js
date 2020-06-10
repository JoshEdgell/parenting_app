const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches '/api/users'
router.route('/')
    .get(usersController.findAll)
    .post(usersController.create)

// Matches '/api/users/login'
router.route('/login')
    .post(usersController.login)

// Matches '/api/users/:id'
router.route('/:id')
    .delete(usersController.remove)

module.exports = router;