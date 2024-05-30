import React from 'react'
import './loginForm.scss'
import img from '../../assets/header-logo.svg'


const LoginForm = ({ handleLogin, setUsername, setPassword, password, username}) => {
  return (
    <section className='container main'>
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
    </section>
  )
}

export default LoginForm