import { GET } from './data/api'
import { getSeed } from './data/token'

interface Provider {
  Key: string;
  Name: string;
  RedirectURL: string;
}

export default function Login() {
  async function handleClick() {
    const providers = await GET(`/auth/login?client_id=${getSeed()}`)

    // TODO: ask user what provider they want to use
    const google = providers.find((element: Provider) => element.Key === 'google')  
    window.location = google.RedirectURL
  }
 
  return (
    <button onClick={handleClick} className="m-3">Login</button>
  )
}