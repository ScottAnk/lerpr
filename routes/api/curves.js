const express = require('express')
const router = express.Router()
const curvesCtrl = require('../../controllers/api/curves')

// POST /api/curves/
router.post('/', curvesCtrl.createCurve)

module.exports = router