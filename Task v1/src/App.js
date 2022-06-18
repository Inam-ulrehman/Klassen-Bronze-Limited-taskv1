import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SharedLayout, Landing, Login, Error, ProtectedRoute } from './pages'
import {
  Agents,
  Dashboard,
  Jeff,
  Office,
  SalesRep,
  SharedDashboardLayout,
  Tom,
  Wendy,
} from './pages/Dashboard.js'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <SharedDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='/dashboard/jeff' element={<Jeff />} />
            <Route path='/dashboard/Wendy' element={<Wendy />} />
            <Route path='/dashboard/Tom' element={<Tom />} />
            <Route path='/dashboard/SalesRep' element={<SalesRep />} />
            <Route path='/dashboard/Office' element={<Office />} />
            <Route path='/dashboard/Agents' element={<Agents />} />
          </Route>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
