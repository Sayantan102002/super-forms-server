const Form = require("../models/form");

const create = async (req, res) => {
    try {
        let form = new Form(req.body);
        await form.save()
            .populate('image')
            .populate({
                path: 'user',
                model: 'User',
            })


        res.status(200).json(form);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }

}
module.exports = {
    create
}
