const express = require('express');
const { create, deleteQuestion, update } = require('../controllers/question.controller');
const router = express.Router()
router.post('/create', create);
router.post('/update', update);
router.post('/delete', deleteQuestion);

module.exports = router;