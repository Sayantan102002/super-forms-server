const express = require('express');
const { create, update, deleteOption } = require('../controllers/option.controller');
const router = express.Router()
router.post('/create', create);
router.post('/update', update);
router.post('/delete', deleteOption);

module.exports = router;