import sendRequest from './send-request'
const BASE_URL = 'http://127.0.0.1:3001'

// this can be used to create any single curve on any sandbox
export function createCurve(sandboxId, curveData) {
  return sendRequest(BASE_URL + `/api/curves/${sandboxId}`, 'POST', curveData)
}

// this will delete a specific curve that user selects via control panel
export function deleteCurve(sandboxId, curveId) {
  return sendRequest(BASE_URL + `/api/curves/delete/${curveId}`, 'DELETE', sandboxId)
}

// this will delete all existing curves in current sandbox
export function clearCurves(sandbox) {
  return sendRequest(BASE_URL + `/api/curves/deleteAll`, 'DELETE', sandbox)
}