import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
  onAuthStateChanged, createUserWithEmailAndPassword
  , signInWithEmailAndPassword, signOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import PropTypes from 'prop-types'

const AuthContext = React.createContext()

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function AuthProvider ({ children }) {
  const [loading, setLoading] = useState(true)

  function signup (email, password) {
    return createUserWithEmailAndPassword(auth, email, password) // return a promise
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      // added event listener
      // TODO: Fix error during login: Error: Objects are not valid as a React child
      console.log('loggeed in user: ' + JSON.stringify(user))
      if (user) {
        setCurrentUser(user)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const [currentUser, setCurrentUser] = useState()
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}
