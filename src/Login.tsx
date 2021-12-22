import { POST } from './data/api'

export default function Login() {
  async function handleClick() {
    const providers = await POST('/auth/login?client_id=abc123client')

    console.log(providers)
    if (providers?.length > 0) {
      window.location = providers[1].RedirectURL
    }

    // ask user what provider they want to use
  }
 
  return (
    <button onClick={handleClick} className="m-3">Login</button>
  )
}