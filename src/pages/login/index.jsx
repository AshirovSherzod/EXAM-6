import React, { memo, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from '../../api'
import { toast } from 'react-toastify'
import LoginForm from '../../components/loginForm'

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
          alert("username or password is incorrect")
          // toast.error("username or password is incorrect")
        })
  }
  return (
    <main>
      <LoginForm handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
    </main>
  )
}

export default memo(Login)