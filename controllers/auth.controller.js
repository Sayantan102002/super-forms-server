const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const users = require('../models/user.model');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const existinguser = await users.findOne({ email })
        if (existinguser) {

            return res.status(404).json({ message: "User already exists" })

        }


        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "Sayantanisagood$Boy", { expiresIn: '1h' });
        res.status(200).json({ newUser, token });

    }
    catch (error) {
        res.status(404).send(error)

    }
}


const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existinguser = await users.findOne({ email })
        if (!existinguser) {

            return res.status(404).json({ message: "User don't exist" })

        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if (!isPasswordCrt) {
            res.status(400).json({ message: "Invalid credentials" })

        }
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, "Sayantanisagood$Boy", { expiresIn: '1h' });
        res.status(200).json({ existinguser, token })
    }
    catch (error) {
        res.status(500).send(error)
        console.log(error);
    }

}


module.exports = {
    signup, login
}


