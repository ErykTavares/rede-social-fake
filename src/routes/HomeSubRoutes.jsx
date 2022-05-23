import React from 'react'
import { Routes, Route } from 'react-router-dom'

const HomeSubRoutes = ({Feed, Message}) => {
  return (
    <Routes>
      <Route index element={Feed} />
      <Route path="/message" element={Message} />
    </Routes>
  )
}

export default HomeSubRoutes
