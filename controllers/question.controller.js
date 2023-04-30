const Form = require("../models/form.model");
const Question = require("../models/question.model")

const create = async (req, res) => {
    const { questionObj, index } = req.body;
    try {
        // if (Question.exists({questionText:questionObj?.questionText})) {
        //     return res.status(400).json({ message: "Question already exists" })
        // }
        // else {

        let question = await Question.create(questionObj);
        const questionId = question._id;
        var updateObj = {
            $push: { questions: { $each: [questionId], $position: index + 1 } },
            // $addToSet: { questions: questionId },

        };

        const form = await Form.findByIdAndUpdate(questionObj?.form, updateObj, { new: true })
        // .populate({
        //     path: 'user',
        //     select: '_id name email'
        // })
        // .populate({
        //     path: 'questions',
        //     //  populate: {
        //     //     path: 'options',
        //     //     model: 'Option'
        //     // }
        // })
        // .populate({
        //     path: 'questions',
        //     // populate: {
        //     //     path: 'optionCols',
        //     //     model: 'Option'
        //     // }
        // })
        question = await Question.findById(questionId)
            .populate({
                path: 'options',
            })
            .populate({
                path: 'optionCols',
            })
        console.log(question)
        res.status(200).json(question);
        // }
    }
    catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
}


const update = async (req, res) => {
    const { questionObj } = req.body;
    try {
        let question = await Question.findByIdAndUpdate(questionObj?._id, questionObj, { new: true })
        console.log(question);
        res.status(200).json(question);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
}



const deleteQuestion = async (req, res) => {
    const { questionId } = req.body;
    try {
        let question = await Question.findByIdAndDelete(questionId);
        var updateObj = {
            $pull: { questions: questionId },
        };

        const form = await Form.findByIdAndUpdate(question?.form, updateObj, { new: true })
            .populate({
                path: 'user',
                select: '_id name email'
            })
            .populate({
                path: 'questions',
                //  populate: {
                //     path: 'options',
                //     model: 'Option'
                // }
            })
            .populate({
                path: 'questions',
                // populate: {
                //     path: 'optionCols',
                //     model: 'Option'
                // }
            })
        res.status(200).json(form);

    }
    catch (err) {
        res.status(500).json(err);
        console.log(err)
    }

}
module.exports = {
    create,
    update,
    deleteQuestion
}