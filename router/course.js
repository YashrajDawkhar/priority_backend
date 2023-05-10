const express = require('express');
const router = express.Router();
const d = require('../controller/course')

router.post('/:category', d.save)
router.get('/:category',d.getDetails)
router.get('/:category/:id',d.getDetailsById)

module.exports = router
