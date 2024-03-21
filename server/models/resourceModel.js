const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    index: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Resource', resourceSchema);