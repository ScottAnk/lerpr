import * as sandboxesAPI from './sandboxes-api'
import * as curvesAPI from './curves-api'

// initial sandbox creation
export async function createNewSandbox(sandboxData) {
  const response = await sandboxesAPI.createSandbox(sandboxData)
  return response.sandbox
}

// update sandbox
export async function updateSandbox(sandbox) {
  const sandboxId = sandbox._id
  const response = await sandboxesAPI.updateSandbox(sandboxId, sandbox)
}

// indexes all sandboxes for community page
export async function indexAllSandboxes() {
  const sandboxes = await sandboxesAPI.indexSandboxes()
  return sandboxes.sandbox
}

// delete sandbox

export async function deleteSandbox(sandbox) {
  const sandboxId = sandbox._id
  await sandboxesAPI.deleteSandbox(sandboxId)
}

// indexes a sandbox by the based on who is logged in
export async function indexMySandboxes() {
  const sandboxes = await sandboxesAPI.findSandboxesByOwner()
  return sandboxes.sandbox
}
