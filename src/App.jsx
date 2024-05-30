import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import SinglePage from './pages/singlePage'
import Admin from './pages/admin'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { ToastContainer } from 'react-toastify'
import Auth from './pages/auth'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/singlepage/:id' element={<SinglePage />}/>
        <Route path='/' element={<Auth />}>
          <Route path='/admin' element={<Admin />}/>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
