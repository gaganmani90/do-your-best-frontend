import { auth } from '../firebase'

export const GetUserEmail = () => {
  return auth.currentUser
}
