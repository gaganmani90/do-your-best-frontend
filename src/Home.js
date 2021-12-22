import PerformanceForm from './PerformanceForm'
import { useAuth } from './context/authContext'
import Logout from './components/logout'

const Home = () => {
  const { currentUser } = useAuth()
  return (
        <><h3>Welcome <b>{currentUser.email}</b>, how did you do today?</h3>
            <PerformanceForm />
            <Logout />
        </>
  )
}

export default Home
