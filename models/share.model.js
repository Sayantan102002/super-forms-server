const mongoose = require('mongoose');
const { Schema } = mongoose;
const shareSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    role: {
        type: String,
        default: "None",
        enum: ["Owner", "Admin", "Editor", "None"]
    }
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("Shared", shareSchema);