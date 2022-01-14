
export const POST   = async (uri: string, body?: string) => await wrappedFetch('post'  , uri, body)
export const GET    = async (uri: string      ) => await wrappedFetch('get'   , uri      )
export const PUT    = async (uri: string, body: string) => await wrappedFetch('put'   , uri, body)
export const DELETE = async (uri: string, body: string) => await wrappedFetch('delete', uri, body)

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options
export async function wrappedFetch(method: string, url: string, body?: string) {
  const headers = {
    // Authorization: 'abc123token', //getAuthzHeader(),
  }

  // when dealing with FormData, i.e., when uploading files, allow the browser to set the request up
  // so boundary information is built properly.
  // if (!(body instanceof FormData)) {
  //   headers['content-type'] = 'application/json'
  //   body = JSON.stringify(body)
  // }

  let response
  try {
    // reminder: fetch does not throw exceptions for non-200 responses (https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
    // const response = await fetch(`${process.env.BASE_API_URL}/${url}`, {
    response = await fetch(`http://localhost:1323${url}`, {
      method,
      credentials: 'include', // ensures the response back from the api will be allowed to "set-cookie"
      headers,
      body,
    })
  } catch (e) {
    console.log('fetch failed')
    return
  }

  const contents = await response.json()

  // gql responses can be the following:
  //   200's can be good { data } or bad { errors, data }
  //   422 is also possible, e.g., if the gql syntax is wrong, { errors }
  // buffalo responses more similarly mimic REST, error format will be:
  //   { code, key } where the message to display must be derived from { key }

  if (response.ok) {
    return contents
  }

  if (response.status === 401) {
    // clearApp()

    if (! ['/', '/login'].includes(window.location.pathname)) {
      window.location.replace(`${window.location.origin}/login?return-to=${window.location.pathname}`)
    }

    return response
  }

  // throwError(polyglot.t(contents.key), response.status)
}
