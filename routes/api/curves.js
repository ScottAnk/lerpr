const express = require('express')
const router = express.Router()
const curvesCtrl = require('../../controllers/api/curves')

// POST /api/curves/
router.post('/', curvesCtrl.createCurve)
// DELETE /api/curves/deleteAll
router.delete('/deleteAll', curvesCtrl.clearCurves)

module.exports = router