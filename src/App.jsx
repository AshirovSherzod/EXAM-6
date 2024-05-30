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
import Layout from './components/layout'


function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
          <Route path='/' element={<Auth />}>
            <Route path='admin' element={<Admin />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
