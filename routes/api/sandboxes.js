const express = require('express')
const router = express.Router()
const sandboxesCtrl = require('../../controllers/api/sandboxes')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/sandboxes/
router.post('/', sandboxesCtrl.createSandbox)
// GET /api/sandboxes/
router.get('/', sandboxesCtrl.indexSandbox)
// PATCH /api/sandboxes/:id
// router.patch('/:id', sandboxesCtrl.update)
// DELETE /api/sandboxes/:id
router.delete('/:id', sandboxesCtrl.deleteSandbox)
// // GET /api/sandboxes/:ownerId
// router.get('/:ownerId', sandboxesCtrl.showByOwner)

module.exports = router