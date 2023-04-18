const Notification = require("../models/notification.model")

const create = async (req, res) => {
    try {
        let notification = await Notification.create(req.body)
        notification = await Notification.findById(notification?._id)
            .populate({
                path: 'user',
                select: '_id name email'
            })
            .populate({
                path: 'receiver',
                select: '_id name email'
            })
            .populate({
                path: 'form',
                select: '_id name description'
            })
        res.status(200).json(notification)

    }
    catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
}
module.exports = {
    create
}