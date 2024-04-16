import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import LandingPage from './pages/LandingPage/LandingPage'
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="styling-div">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/activities' element={<ActivitiesPage />}/>
        <Route />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
