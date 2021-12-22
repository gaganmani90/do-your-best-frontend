import React from 'react'
import { useAuth } from '../context/authContext'
import { Outlet, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute ({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return currentUser ? <Outlet /> : <Navigate to="/login" />
}
PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
}

export default PrivateRoute
