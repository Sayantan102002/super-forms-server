const { create } = require("../controllers/notification.controller")

const express = require('express')
const router = express.Router()

router.post('/create', create)

module.exports = router