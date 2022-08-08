import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'
import Home from '../../pages/Home'
import Logding from '../../pages/Lodging'
import About from '../../pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/lodging/:id" element={<Logding />} />
        <Route path="/about/" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
