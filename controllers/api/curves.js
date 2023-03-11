const Sandbox = require('../../models/sandbox')

// Create
async function createCurve(req, res, next) {
    try {
        const curve = req.body
        const sandboxId = req.body.sandboxId
        const sandbox = await Sandbox.findById(sandboxId)
        sandbox.curves.push(curve)
        return sandbox.save()
            .then((sandbox) => {
                res.status(201).json({ sandbox: sandbox })
            })
    } catch(error) {
        console.log(error)
        next(error)
    }
}

// Delete

module.exports = {
    createCurve,
}