import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Logding from './pages/Lodging'
import About from './pages/About'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Lodging/:id" element={<Logding />} />
      <Route path="/About/" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
