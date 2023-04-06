const Form = require("../models/form.model");

const create = async (req, res) => {
    try {
        let form = await Form.create(req.body)
        Form.findById(form?._id)
            // .populate('image')
            .populate({
                path: 'user',
                model: 'User',
            }).then(() => {
                console.log(form);
            })

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
        if (!Form.exists({ _id: req.body.formId }))
            res.status(200).json({ message: "Form doesn't exist" })
        else {
            const form = await Form.findByIdAndDelete(req.body.formId);
            const forms = await Form.find({ user: form?.user })
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
            res.status(200).json(forms);

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
                // populate: {
                //     path: 'options',
                //     model: 'Option'
                // }
            })
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
