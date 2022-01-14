
const clientIDparam = 'clientID'
const tokenParam = 'token'

export const getToken = () => getClientID() + (localStorage.getItem(tokenParam) || '')

export const getClientID = () => localStorage.getItem(clientIDparam)

export const clear = () => {
  localStorage.removeItem(clientIDparam)
  localStorage.removeItem(tokenParam)
}

init()
function init() {  
  localStorage.getItem(clientIDparam) || localStorage.setItem(clientIDparam, makeRandomID())

  const params = new URLSearchParams(window.location.search)

  if (getParam(params, tokenParam)) {
    cleanAddressBar(params.toString())
  }
}

function getParam(params: URLSearchParams, name: string) {
  const value = params.get(name)

  if (value !== null) {
    localStorage.setItem(name, value)
    params.delete(name)
  }

  return value
}

function cleanAddressBar(qs: string) {
  const search = qs.length ? `?${qs}` : ''

  window.location.replace(window.location.pathname + search)
}  

function makeRandomID() {
  return Math.random().toString(36).slice(2)
}
