const express = require('express')
const router = express.Router()
const curvesCtrl = require('../../controllers/api/curves')

// POST /api/curves/:sandboxId
router.post('/:sandboxId', curvesCtrl.createCurve)
// DELETE /api/curves/deleteAll
router.delete('/deleteAll', curvesCtrl.clearCurves)
// DELETE /api/curves/delete/:id
router.delete('/delete/:id', curvesCtrl.deleteOneCurve)

module.exports = router
