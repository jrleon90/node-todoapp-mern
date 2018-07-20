const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    _id: String,
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true}
});

mongoose.model('Activity', activitySchema);

module.exports = mongoose.model('Activity');