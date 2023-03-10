const sandbox = require('../../models/sandbox')
const Sandbox = require('../../models/sandbox')

//Create
async function createSandbox(req, res, next) {
    try {
        // console.log(req.user)
        // console.log(req.body)
        const body = req.body
        body.owner = req.user._id
        console.log(req.body)
        const sandbox = await Sandbox.create(req.body)
        // sandbox.owner = req.user._id
        res.sendStatus(201).json({ sandbox: sandbox })

    }
    catch(error){
        console.log(error)
        next(error)
    }
}
//Delete
async function deleteSandbox(req, res, next) {
    try {
    const sandbox = await Sandbox.findById(req.params.id)
    sandbox.deleteOne()
    return res.sendStatus(204)
    }
    catch(error){
        next(error)
        console.log(error)
    }
}
//Index
async function indexSandbox(req, res, next) {
    try{
        const sandboxes = await Sandbox.find()
        console.log(sandboxes)
        if(!sandboxes) return new Error('No sandboxes available')
        const sandbox = sandboxes.map(sandboxes => sandboxes)
        console.log(sandbox)
        return res.status(200).json({ sandbox: sandbox})


    }
    catch(error) {
        next(error)
        console.log(error)
    }
}









module.exports = {
    createSandbox,
    indexSandbox,
    deleteSandbox
}