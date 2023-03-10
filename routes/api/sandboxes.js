const express = require('express')
const router = express.Router()
const sandboxesCtrl = require('../../controllers/api/users')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/sandboxes/
router.post('/sandboxes', sandboxesCtrl.create)
// GET /api/sandboxes/
router.get('/sandboxes', sandboxesCtrl.show)
// PATCH /api/sandboxes/:id
router.patch('/sandboxes/:id', sandboxesCtrl.update)
// DELETE /api/sandboxes/:id
router.delete('/sandboxes/:id', sandboxesCtrl.delete)

module.exports = router