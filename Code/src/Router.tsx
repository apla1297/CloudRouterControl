import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Layouts

//Pages
import Dashboard from './Pages/Dashbaord'
import Config from './Pages/Config'
import NotFound from './Pages/Error Pages/NotFound'

const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      {/* Controller */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* Config */}
      <Route path="/config" element={<Config />} />
      {/* Not found */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Router
