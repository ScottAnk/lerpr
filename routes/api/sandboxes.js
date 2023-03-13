const express = require('express')
const router = express.Router()

const sandboxesCtrl = require('../../controllers/api/sandboxes')
const ensureOwner = require('../../config/ensureOwner')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/sandboxes/
router.post('/', ensureLoggedIn, sandboxesCtrl.createSandbox)
// GET /api/sandboxes/
router.get('/', sandboxesCtrl.indexSandbox)
// PATCH /api/sandboxes/:id
router.patch(
  '/update/:id',
  ensureLoggedIn,
  ensureOwner,
  sandboxesCtrl.updateSandbox
)
// DELETE /api/sandboxes/:id
router.delete('/:id', ensureLoggedIn, ensureOwner, sandboxesCtrl.deleteSandbox)
// // GET /api/sandboxes/owner
router.get('/owner', sandboxesCtrl.findSandboxesByOwner)
// GET /api/sandboxes/:id
router.get('/:id', sandboxesCtrl.findSandboxById)

module.exports = router
