const mongooose = require('mongoose')
const { Schema } = mongooose;
const notificationSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Invitation', 'Message']
    },
    form: {
        type: Schema.Types.ObjectId,
        ref: 'Form'
    },
    seen: {
        type: Boolean,
        default: false
    },
    actions: {
        type: String,
        enum: ['Accept', 'Reject', 'Delete']
    }
},
    {
        timestamps: true
    })

module.exports = mongooose.model('Notification', notificationSchema)