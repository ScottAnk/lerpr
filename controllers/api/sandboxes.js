const Sandbox = require('../../models/sandbox')

//Create

async function createSandbox(req, res, next) {
  try {
    const body = req.body
    body.owner = req.user._id
    const sandbox = await Sandbox.create(req.body)
    res.status(201).json({ sandbox: sandbox })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

//Delete

async function deleteSandbox(req, res, next) {
  try {
    const sandbox = await Sandbox.findById(req.params.id)
    await sandbox.deleteOne()
    res.sendStatus(204)
  } catch (error) {
    next(error)
    console.log(error)
  }
}

//Index

async function indexSandbox(req, res, next) {
  try {
    const sandboxes = await Sandbox.find()
    if (!sandboxes) return new Error('No sandboxes available')
    const sandbox = sandboxes.map((sandboxes) => sandboxes)
    return res.status(200).json({ sandbox: sandbox })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// find by owner

async function findSandboxesByOwner(req, res, next) {
  try {
    const user = req.user._id
    const sandboxes = await Sandbox.find({ owner: user })
    if (!sandboxes) return new Error('No sandboxes available')
    const sandbox = sandboxes.map((sandboxes) => sandboxes)
    return res.status(200).json({ sandbox: sandbox })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

// show by sandbox id

async function findSandboxById(req, res, next) {
  try {
    const sandbox = await Sandbox.findById(req.params.id)
    if (!sandbox) return next(new Error('No sandbox available'))
    return res.status(200).json({ sandbox: sandbox })
  } catch (error) {
    next(error)
    console.log(error)
  }
}

//Update

async function updateSandbox(req, res, next) {
  try {
    const sandbox = await Sandbox.findById(req.params.id)
    return sandbox.updateOne(req.body).then(() => res.sendStatus(204))
  } catch (error) {
    next(error)
    console.log(error)
  }
}

module.exports = {
  createSandbox,
  indexSandbox,
  deleteSandbox,
  findSandboxesByOwner,
  findSandboxById,
  updateSandbox,
}
