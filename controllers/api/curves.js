const Sandbox = require('../../models/sandbox')

// Create
async function createCurve(req, res, next) {
  try {
    const curve = req.body
    const sandboxId = req.params.sandboxId
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

// Delete all curves and send back default
async function clearCurves(req, res, next) {
  try {
    const sandboxId = req.body.sandbox._id
    const sandbox = await Sandbox.findById(sandboxId)
    sandbox.curves = []
    sandbox.curves.push({
      startPoint: { x: 0, y: 600, solid: true },
      endPoint: { x: 900, y: 0, solid: true },
      control1: { x: 300, y: 400, solid: false },
      control2: { x: 600, y: 200, solid: false },
    })
    sandbox.save().then(() => res.status(201).json({ sandbox: sandbox }))
  } catch (error) {
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
    next(error)
  }
}

module.exports = {
  createCurve,
  clearCurves,
  deleteOneCurve,
}
