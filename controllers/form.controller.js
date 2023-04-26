const Form = require("../models/form.model");
const Shared = require("../models/share.model")
const create = async (req, res) => {
    try {
        let share = await Shared.create(req.body.shared);
        let form = await Form.create({ ...req.body, shared: [share?._id] })
        form = await Form.findById(form?._id)
            // .populate('image')
            .populate({
                path: 'user',
                select: '_id name email'
            })
            .populate({
                path: 'questions',
                populate: {
                    path: 'options',

                }

            })
            .populate({
                path: 'questions',
                populate: {
                    path: 'optionCols',

                }

            })
            .populate([{
                path: "shared",
                model: "Shared",
                populate: {
                    path: "user",
                    model: "User"
                }
            }])
        // .then(() => {
        //     console.log(form);
        // })

        // console.log()
        res.status(200).json(form);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }

}
const deleteForm = async (req, res) => {
    try {
        if (Form.findById(req.body.formId) === null)
            res.status(500).json({ message: "Form doesn't exist" })
        else {
            const form = await Form.findByIdAndDelete(req.body.formId);
            // const forms = await Form.find({ user: form?.user })
            //     .populate({
            //         path: 'user',
            //         select: '_id name email'
            //     }).populate({
            //         path: 'questions',
            //         // populate: {
            //         //     path: 'options',
            //         //     model: 'Option'
            //         // }
            //     })
            console.log(form)
            res.status(200).json({ message: "Form deleted successfully" });

        }
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}
const getForms = async (req, res) => {
    try {
        console.log(req.body)
        const forms = await Form.find({ user: req.body.user })
            .populate({
                path: 'user',
                select: '_id name email'
            }).populate({
                path: 'questions',
                populate: {
                    path: 'options',

                }

            })
            .populate({
                path: 'questions',
                populate: {
                    path: 'optionCols',

                }

            })
            .populate([{
                path: "shared",
                model: "Shared",
                populate: {
                    path: "user",
                    model: "User"
                }
            }])
        // .populate({
        //     path: 'questions',
        //     populate: {
        //         path: 'optionCols',
        //         model: 'Option'
        //     }
        // })
        res.status(200).json(forms);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}
// const update=async(req,res)=>{
//     try{

//     }
// }
module.exports = {
    create,
    deleteForm,
    getForms
}
