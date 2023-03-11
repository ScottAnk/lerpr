const express = require('express')
const router = express.Router()
const sandboxesCtrl = require('../../controllers/api/sandboxes')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/sandboxes/
router.post('/', sandboxesCtrl.createSandbox)
// GET /api/sandboxes/
router.get('/', sandboxesCtrl.indexSandbox)
// PATCH /api/sandboxes/:id
router.patch('/update/:id', sandboxesCtrl.updateSandbox)
// DELETE /api/sandboxes/:id
router.delete('/:id', sandboxesCtrl.deleteSandbox)
// // GET /api/sandboxes/owner/:id
router.get('/owner/:id', sandboxesCtrl.findSandboxesByOwner)
// GET /api/sandboxes/:id
router.get('/:id', sandboxesCtrl.findSandboxById)

module.exports = router
