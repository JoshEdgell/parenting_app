const db = require('../models');

module.exports = {
    findAll: function(req,res) {
        db.Activity
        .find(req.query)
        // .then(dbModel => res.json(dbModel))
        .then(dbModel => res.send('findAll route hit'))
        .catch(error => res.status(422).json(error))
    }
}