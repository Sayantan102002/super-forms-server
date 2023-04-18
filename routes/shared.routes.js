const express = require('express');
const { addToshare } = require('../controllers/share.controller');
const router = express.Router()

router.post("/addToShare/", addToshare);

module.exports = router;