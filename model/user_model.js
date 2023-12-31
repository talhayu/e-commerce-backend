const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
})

const user = mongoose.model("users", UserSchema);
module.exports = user;
