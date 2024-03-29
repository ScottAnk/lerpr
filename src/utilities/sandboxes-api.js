import sendRequest from './send-request'
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_DEPLOYMENT_BACKEND
    : process.env.REACT_APP_DEVELOPMENT_BACKEND

export function createSandbox(sandboxData) {
  return sendRequest(BASE_URL + '/api/sandboxes', 'POST', sandboxData)
}

export function indexSandboxes() {
  return sendRequest(BASE_URL + '/api/sandboxes', 'GET')
}

export function findSandboxesByOwner() {
  return sendRequest(BASE_URL + '/api/sandboxes/owner', 'GET')
}

export function findSandboxById(sandboxId) {
  return sendRequest(BASE_URL + `/api/sandboxes/${sandboxId}`, 'GET')
}

export function updateSandbox(sandboxId, sandboxData) {
  return sendRequest(
    BASE_URL + `/api/sandboxes/update/${sandboxId}`,
    'PATCH',
    sandboxData
  )
}

export function deleteSandbox(sandboxId) {
  return sendRequest(BASE_URL + `/api/sandboxes/${sandboxId}`, 'DELETE')
}
