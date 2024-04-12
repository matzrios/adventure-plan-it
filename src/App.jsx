import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="styling-div">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route />
        <Route />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
