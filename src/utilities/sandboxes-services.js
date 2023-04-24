import * as sandboxesAPI from './sandboxes-api'
import * as curvesServices from './curves-service'

// initial sandbox creation
export async function createNewSandbox(sandboxData) {
  console.log('logging from service.createNew ', sandboxData)
  const translatedSandbox = {
    ...sandboxData,
    curves: curvesServices.convertToDatabaseFormat(sandboxData.curves),
  }
  delete translatedSandbox._id

  const response = await sandboxesAPI.createSandbox(translatedSandbox)
  response.sandbox.curves = curvesServices.convertToClientFormat(
    response.sandbox.curves
  )

  return response.sandbox
}

// update sandbox
export async function updateSandbox(sandbox) {
  const sandboxId = sandbox._id

  const translatedSandbox = {
    ...sandbox,
    curves: curvesServices.convertToDatabaseFormat(sandbox.curves),
  }

  await sandboxesAPI.updateSandbox(sandboxId, translatedSandbox)
}

// indexes all sandboxes for community page
export async function indexAllSandboxes() {
  const response = await sandboxesAPI.indexSandboxes()
  const sandboxes = response.sandbox

  sandboxes.forEach((sandbox) => {
    sandbox.curves = curvesServices.convertToClientFormat(sandbox.curves)
  })

  return sandboxes
}

// delete sandbox

export async function deleteSandbox(sandbox) {
  const sandboxId = sandbox._id
  await sandboxesAPI.deleteSandbox(sandboxId)
}

// indexes a sandbox by the based on who is logged in
export async function indexMySandboxes() {
  const response = await sandboxesAPI.findSandboxesByOwner()
  const sandboxes = response.sandbox

  sandboxes.forEach((sandbox) => {
    sandbox.curves = curvesServices.convertToClientFormat(sandbox.curves)
  })

  return sandboxes
}
