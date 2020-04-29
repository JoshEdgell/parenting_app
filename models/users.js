const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Activity = require('./activities')

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    favorites: [Activity.schema],
    supplies: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;