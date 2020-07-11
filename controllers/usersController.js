const bcrypt = require('bcrypt');

const db = require('../models');

module.exports = {
    findAll: function(req,res) {
        db.User
            .find()
            .then(foundUsers => res.json(foundUsers))
            .catch(error => res.status(422).json(error));

    },
    create: function(req, res) {
        let userDbEntry = req.body;
        userDbEntry.password = bcrypt.hashSync(userDbEntry.password, bcrypt.genSaltSync(10))
        db.User
            .create(userDbEntry)
            .then(newUser => res.send(newUser))
            .catch(error => res.send(error))
    },
    remove: function(req,res) {
        db.User
            .findById({_id: req.params.id})
            .then(foundUser => foundUser.remove())
            .then(foundUser => res.json(foundUser))
            .catch(error => res.status(422).json(error))
    },
    login: function(req,res) {
        console.log("login route hit in the controller");
        console.log(req.body);
        db.User
            .findOne({username: req.body.username})
            .then(foundUser => {
                if (foundUser) {
                    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                        res.send('user logged in');
                    } else {
                        res.status(401).send('incorrect password');
                    }
                } else {
                    res.status(404).send('user not found')
                }
            })
    }
}