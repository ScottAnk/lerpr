import * as sandboxesAPI from './sandboxes-api'
import * as curvesAPI from './curves-api'

// initial sandbox creation
export async function saveFirstSandbox(sandboxData) {
  const response = await sandboxesAPI.createSandbox(sandboxData)

  return response.sandbox
}

// delete sandbox

export async function deleteSandbox(sandbox) {
  const sandboxId = sandbox._id
  await sandboxesAPI.deleteSandbox(sandboxId)
}
