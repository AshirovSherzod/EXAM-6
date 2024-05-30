import React, { memo, useState } from 'react'

import './login.scss'
import img from '../../assets/header-logo.svg'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'
import { toast } from 'react-toastify'

const Login = () => {
  let navigate = useNavigate()
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const handleLogin = e => {
    e.preventDefault()
    let user = {username, password}

    axios
        .post("/auth/login", user)
        .then(res => {
          // toast.success("you're logged in")
          localStorage.setItem("x-auth-token", res.data.token)
          navigate("/admin")
        })
        .catch(err => {
          // toast.error("username or password is incorrect")
        })
  }
  return (
    <main className='container main'>
      <form action="" onSubmit={handleLogin} className='form'>
        <div className="form__img">
          <img src={img} alt="" />
        </div>
        <div className="form__inputs">
          <label htmlFor="">Email Addres</label>
          <input 
            type="text" 
            required 
            placeholder='Enter Your Email' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="">Password </label>
          <input 
            type="text" 
            required 
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className="form__checkbox">
          <div className="form__checkbox__input">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <a href="">Forgot Password ?</a>
        </div>
        <div className="form__btns">
          <button type='submit' className='form__btns__login'>Login</button>
          <button className='form__btns__signin'>Sign up?</button>
        </div>
      </form>
    </main>
  )
}

export default memo(Login)