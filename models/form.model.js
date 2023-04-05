const mongoose = require('mongoose');
const { Schema } = mongoose;
const formSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        }
    ]
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("Form", formSchema);