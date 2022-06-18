import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.user)
  if (!isLogin) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedRoute
