const Form = require("../models/form.model");
const Shared = require("../models/share.model")

const addToshare = async (req, res) => {
    try {
        const shareObj = await Shared.create(req.body);
        let updateObj = {
            $addToSet: { shared: shareObj?._id }
        }
        const form = await Form.findByIdAndUpdate(req.body.formId, updateObj, { new: true })
            .populate({
                path: 'user',
                select: '_id name email'
            }).populate({
                path: 'questions',
                // populate: {
                //     path: 'options',
                //     model: 'Option'
                // }
            })
            .populate([{
                path: "shared",
                model: "Shared",
                populate: {
                    path: "user",
                    model: "User"
                }
            }])
        res.status(200).json(form);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}
module.exports = {
    addToshare
}