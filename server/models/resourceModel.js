const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },    
    image: {
        type: String,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Resource', resourceSchema);