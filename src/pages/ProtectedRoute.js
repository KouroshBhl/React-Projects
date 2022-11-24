import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children, user }) => {
  if (user) return children
  return <Navigate to='/' />
}

export default ProtectedRoute
