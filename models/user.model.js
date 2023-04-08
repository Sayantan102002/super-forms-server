const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    firebaseUid: {
        type: String,
        required: true,
    },
    photoURL: {
        type: String,
        default: "",
    }

})

module.exports = mongoose.model("User", userSchema);

