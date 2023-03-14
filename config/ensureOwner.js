const Sandbox = require('../models/sandbox')

module.exports = async function (req, res, next) {
  // TODO handle the error where this doesn't find a matching sandbox
  const baseSandbox = await Sandbox.findById(req.params.id)
  if (!baseSandbox.owner.equals(req.user._id)) {
    //make a new sandbox based on req.body.id
    const newSandbox = await Sandbox.create({
      name: baseSandbox.name,
      owner: req.user._id,
      dataURL: baseSandbox?.dataURL,
      curves: baseSandbox.curves,
      colorStart: baseSandbox.colorStart,
      colorEnd: baseSandbox.colorEnd,
    })

    //insert the new one in place of the sandbox in the request.
    req.body = newSandbox
    req.params.id = newSandbox.id
  }
  // Okay!
  next()
}
