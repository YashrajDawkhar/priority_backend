const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    courses: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);