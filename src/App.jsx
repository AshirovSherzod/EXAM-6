import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import SinglePage from './pages/singlePage'
import Admin from './pages/admin'
import Header from './components/layout/header'
import Footer from './components/layout/footer'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/singlepage' element={<SinglePage />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
