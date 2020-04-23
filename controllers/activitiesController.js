const _ = require('lodash');
const db = require('../models');

module.exports = {
    findAll: function(req,res) {
        db.Activity
        .find()
        .then(foundActivities => res.json(foundActivities))
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
    supplySearch: function(req,res) {
        let searchObject = req.query;
        // Replace all values with an array of the different search values
        searchObject.supplies = searchObject.supplies.split(' ');
        // "allSupplies" is a boolean - if set to "true," the search needs to be exclusive; if set to "false", their search needs to be inclusive
        searchObject.allSupplies == 'true' ? searchObject.allSupplies = true : searchObject.allSupplies = false;
        db.Activity
            .find()
            .then(foundActivities => {
                let returnArray = [];
                if (searchObject.allSupplies) {
                    // Exclusive supply search - any activities found consist only of supplies the user has
                    for (let i = 0; i < foundActivities.length; i++) {
                        
                        if (_.intersection(searchObject.supplies, foundActivities[i].supplies).length == foundActivities[i].supplies.length) {
                            returnArray.push(foundActivities[i])
                        }
                    }
                } else {
                    // Inclusive supply search - any activities found consist of at least one activity the user has searched
                    for (let i = 0; i < foundActivities.length; i++) {
                        if (_.intersection(searchObject.supplies, foundActivities[i].supplies).length > 0) {
                            returnArray.push(foundActivities[i])
                        }
                    }
                }

                res.send(returnArray)
            })
            .catch(error => res.status(422).json(error))
    },
    tagSearch: function(req,res) {
        console.log("tag search hit")
        let searchObject = req.query;
        // Replace all values with an array of the different search values
        searchObject.tags = searchObject.tags.split(' ');
        db.Activity
            .find()
            .then(foundActivities => {
                let returnArray = [];
                // Inclusive tag search - any activities found consist of at least one tag the user has searched
                for (let i = 0; i < foundActivities.length; i++) {
                    if (_.intersection(searchObject.tags, foundActivities[i].tags).length > 0) {
                        returnArray.push(foundActivities[i])
                    }
                }
                res.send(returnArray)
            })
            .catch(error => res.status(422).json(error))
    }
}