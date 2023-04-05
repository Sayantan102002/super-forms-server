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
// const update=async(req,res)=>{
//     try{

//     }
// }
module.exports = {
    create
}
