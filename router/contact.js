const express = require('express');
const router = express.Router();
const d = require('../controller/contact')

router.post('/', d.save)


module.exports = router
