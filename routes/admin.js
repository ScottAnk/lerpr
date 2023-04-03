const express = require('express')
const router = express.Router()

router.put('/wake', (req, res, next) => {
  res.sendStatus(204)
})

module.exports = router
