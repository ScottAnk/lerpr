import sendRequest from './send-request'
const BASE_URL = 'http://127.0.0.1:3001'

export function createSandbox(sandboxData) {
  return sendRequest(BASE_URL + '/api/sandboxes', 'POST', sandboxData)
}
