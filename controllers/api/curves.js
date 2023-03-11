const Sandbox = require('../../models/sandbox')

// Create
async function createCurve(req, res, next) {
  try {
    const curve = req.body
    const sandboxId = req.body.sandboxId
    const sandbox = await Sandbox.findById(sandboxId)
    sandbox.curves.push(curve)
    return sandbox.save().then((sandbox) => {
      res.status(201).json({ sandbox: sandbox })
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// Delete all curves (clear button)
async function clearCurves(req, res, next) {
  try {
    const sandboxId = req.body.sandboxId
    const sandbox = await Sandbox.findById(sandboxId)
    sandbox.curves.pull({})
    return sandbox.save().then(() => res.sendStatus(204))
  } catch (error) {
    console.log(error)
    next(error)
  }
}

// Delete one curve
async function deleteOneCurve(req, res, next) {
  try {
    const curveId = req.params.id
    const sandboxId = req.body.sandboxId
    const sandbox = await Sandbox.findById(sandboxId)
    sandbox.curves.pull(curveId)
    return sandbox.save().then(() => res.sendStatus(204))
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = {
  createCurve,
  clearCurves,
  deleteOneCurve,
}
