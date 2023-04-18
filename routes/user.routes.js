const express = require('express');
const router = express.Router();
const { signup, login, getUpdatedUser } = require('../controllers/auth.controller.js');
const { getUsers } = require('../controllers/users.controller.js');


router.post('/signup', signup);
router.post('/login', login);
router.post('/getUpdatedUser', getUpdatedUser);
router.post('/getUsers', getUsers);

module.exports = router;

