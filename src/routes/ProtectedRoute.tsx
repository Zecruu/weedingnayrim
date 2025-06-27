import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessCode = localStorage.getItem('weddingAccessCode')
  const validCode = 'yestoforeeveR'
  
  // Check if the stored code matches the valid code
  if (accessCode !== validCode) {
    return <Navigate to="/access" replace />
  }
  
  return <>{children}</>
}

export default ProtectedRoute
