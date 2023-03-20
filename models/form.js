const mongoose = require('mongoose');
const { Schema } = mongoose;
const formSchema = Schema({
    name: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: 'File',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },


},
    {
        timestamps: true,
    })

module.exports = mongoose.model("Form", formSchema);