const express = require('express');
const { create, deleteForm, getForms, getFormById } = require('../controllers/form.controller');
const router = express.Router();

router.post('/create', create);
router.post('/delete', deleteForm);
router.post('/getForms', getForms)
router.post('/getFormById', getFormById)

module.exports = router;