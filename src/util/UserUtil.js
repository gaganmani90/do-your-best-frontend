import { useAuth } from "../context/authContext"
import { auth } from "../firebase"

export const GetUserEmail = () => {
    return auth.currentUser
}