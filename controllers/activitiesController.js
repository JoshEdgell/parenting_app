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
    search: function(req,res) {
        let searchObject = req.query;
        // Replace all values with an array of the different search values
        Object.keys(searchObject).forEach(key => {
            searchObject[key] = searchObject[key].split(' ');
        });
        // "allSupplies" and "allTags" are booleans - if set to "true," their searches need to be exclusive; if set to "false", their searches need to be inclusive
        searchObject.allSupplies[0] == 'true' ? searchObject.allSupplies = true : searchObject.allSupplies = false;
        searchObject.allTags[0] == 'true' ? searchObject.allTags = true : searchObject.allTags = false;
        console.log(searchObject, `searchObject`)
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
    }
}