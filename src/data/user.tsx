import { GET } from './api'

export interface User {
  id       : string
  firstName: string
  lastName : string
  email    : string
  avatarURL: string
  role     : string
  createdAt: string
  updatedAt: string
}

export function getUser() {
  return GET('/user')
}
