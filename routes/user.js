const express = require('express');
const { signup } = require('../controllers/auth.js')
const { login } = require('../controllers/auth.js')
const router = express.Router();

const bcrypt = require('bcryptjs')


const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const users = require('../models/user');



router.post('/signup', signup);
router.post('/login', login);

module.exports = router;

