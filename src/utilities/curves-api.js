import sendRequest from './send-request'
const BASE_URL = 'http://127.0.0.1:3001'

// this can be used to create any single curve on any sandbox
export function createCurve(sandboxId, curveData) {
  return sendRequest(BASE_URL + `/api/curves/${sandboxId}`, 'POST', curveData)
}
