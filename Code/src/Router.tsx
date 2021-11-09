import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Layouts

//Pages
import Dashboard from './Pages/Dashbaord'
import NotFound from './Pages/Error Pages/NotFound'

const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      {/* Home */}
      <Route path="/" element={<Dashboard />} />
      {/* Not found */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Router
