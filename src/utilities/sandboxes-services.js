import * as sandboxesAPI from './sandboxes-api'
import * as curvesAPI from './curves-api'

// initial sandbox creation
export async function saveFirstSandbox(sandboxData, curveData) {
  const sandbox = await sandboxesAPI.createSandbox(sandboxData)
  const sandboxId = sandbox.sandbox._id

  await curveData.forEach((curve) => {
    curvesAPI.createCurve(sandboxId, curve)
  })

  const newSandbox = await sandboxesAPI.findSandboxById(sandboxId)

  return newSandbox
}

// delete sandbox

/* WORKS, THROWS A STRANGE "UNEXPECTED END OF INPUT (JSON) ERROR" THOUGH */
export async function deleteSandbox(sandbox) {
  const sandboxId = sandbox.sandbox._id
  await sandboxesAPI.deleteSandbox(sandboxId)
}
