const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches '/api/users'
router.route('/')
    .post(usersController.create)

module.exports = router;