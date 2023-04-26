const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const OptionSchema = new Schema(
    {
        question: {
            type: Schema.Types.ObjectId,
            ref: "Question",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        open: { type: Boolean, default: true },
        optionText: String,
        optionImage: { type: String, default: "" },
    },
    {
        timestamps: true,
    }
);

const Option = model("Option", OptionSchema);

module.exports = Option;
