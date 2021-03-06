import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

function Logout () {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    setError('')
    try {
      await logout()
      console.log(currentUser.email + ' is successfully logged out')
      navigate('/login')
    } catch (err) {
      setError('cannot logout')
      console.log('logout error: ' + error)
    }
  }

  return (
        <div className="text-center w-100 mt-2">
            <Button variant="link" onClick={handleLogOut}>
                Log Out
            </Button>
        </div>
  )
}

export default Logout
