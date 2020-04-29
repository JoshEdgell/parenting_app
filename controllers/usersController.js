const db = require('../models');

module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(newUser => res.send(newUser))
            .catch(error => res.send(error))
    }
}