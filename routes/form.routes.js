const express = require('express');
const { create, deleteForm, getForms } = require('../controllers/form.controller');
const router = express.Router();

router.post('/create', create);
router.post('/delete', deleteForm);
router.post('/getForms', getForms)

module.exports = router;