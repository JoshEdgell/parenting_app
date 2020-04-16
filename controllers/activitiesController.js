const db = require('../models');

module.exports = {
    findAll: function(req,res) {
        db.Activity
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(error => res.status(422).json(error))
    },
    create: function(req,res) {
        db.Activity
            .create(req.body)
            .then(newActivity => res.json(newActivity))
            .catch(error => res.status(422).json(error));
    },
    findById: function(req,res) {
        db.Activity
            .find({_id: req.params.id})
            .then(foundActivity => res.json(foundActivity))
            .catch(error => res.status(422).json(error))
    },
    search: function(req,res) {
        res.send('search route hit')
    }
}