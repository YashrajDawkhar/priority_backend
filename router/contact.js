const express = require('express');
const router = express.Router();
const d = require('../controller/contact')

router.post('/', d.save)
router.get('/', d.getContactDetails)

module.exports = router
