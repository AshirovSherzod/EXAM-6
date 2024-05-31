import React from 'react'

import img from '../../assets/admin-form.png'
import './adminForm.scss'

const AdminForm = () => {
  return (
    <section className='admin-form container'>
      <form action="" className='admin-form__form'>
        <h2>Drop Us a line</h2>
        <div className="admin-form__form__inputs">
          <div className="">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Your Phone'/>
          </div>
          <div className="">
            <input type="text" placeholder='Your Email'/>
            <input type="text" placeholder='Subject'/>
          </div>
        </div>
        <input name="" id=""></input>
        <button>Send Message</button>
      </form>
      <div className="admin-form__img">
        <img src={img} alt="" />
      </div>
    </section>
  )
}

export default AdminForm