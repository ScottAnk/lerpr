import sendRequest from './send-request'
const BASE_URL = 'http://127.0.0.1:3001'

export function createSandbox(sandboxData) {
  return sendRequest(BASE_URL + '/api/sandboxes', 'POST', sandboxData)
}

export function indexSandbox() {
  return sendRequest(BASE_URL, 'GET')
}

export function findSandboxesByOwner() {
  return sendRequest(BASE_URL + '/api/sandboxes/owner', 'GET')
}

export function findSandboxById(sandboxId) {
  return sendRequest(BASE_URL + `/api/sandboxes/${sandboxId}`, 'GET')
}

export function updateSandbox(sandboxId, sandboxData) {
  return sendRequest(BASE_URL + `/api/sandboxes/update/${sandboxId}`, 'PATCH', sandboxData)
}

export function deleteSandbox(sandboxId) {
  return sendRequest(BASE_URL + `/api/sandboxes/${sandboxId}`, 'DELETE')
}
