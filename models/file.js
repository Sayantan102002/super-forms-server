const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const fileSchema = Schema({
    displayPicture: {
        type: string,
    }
})
module.exports = model("File", fileSchema);