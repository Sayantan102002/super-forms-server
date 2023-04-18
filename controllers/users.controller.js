const User = require('../models/user.model')
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
            // .limit(5)
            .sort({ createdAt: -1 })
            .select("-password")
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(err)
    }
}
module.exports = {
    getUsers
}