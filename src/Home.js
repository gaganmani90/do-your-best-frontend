import PerformanceForm from './PerformanceForm'
import { useAuth } from './context/authContext'
import Logout from './components/logout'
import { doc, setDoc } from 'firebase/firestore'
import { db } from './firebase'

const Home = () => {
  const { currentUser } = useAuth()
  return (
        <><h3>Welcome <b>{currentUser.email}</b>, how did you do today?</h3>
            <PerformanceForm />
            <Logout />
        </>
  )
}

async function setDocument (currentUser) {
  console.log('writing data')
  const userDoc = doc(db, 'users', currentUser.email)
  await setDoc(userDoc, { isUser: true })
}

export default Home
