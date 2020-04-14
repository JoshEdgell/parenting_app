const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    title: String,
    link: String,
    description: String,
    supplies: Array,
    prep_time: Number,
    tags: Array,
    flags: Array
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;