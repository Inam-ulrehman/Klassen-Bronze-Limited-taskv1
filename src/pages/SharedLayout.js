import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default SharedLayout
