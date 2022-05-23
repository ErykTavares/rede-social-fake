import React from 'react'
import { Route, Routes } from 'react-router-dom'

const LoginSubRoutes = ({SingIn, SingUp, Forgot}) => {
  return (
    <Routes>
      <Route index element={SingIn} />
      <Route path="singup" element={SingUp} />
      <Route path="forgot" element={Forgot} />
    </Routes>
  )
}

export default LoginSubRoutes
