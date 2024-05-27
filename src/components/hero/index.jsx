import React, { memo } from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <section className='hero container'>
      <div className="hero__desc">
        <h1>Fresh Vegetables <br /> Big discount</h1>
        <p>Save up to 50% off on your first order</p>
      </div>
      <form action="" className=''>
        <input type="text" placeholder='Your emaill address'/>
        <button>Subscribe</button>
      </form>
    </section>
  )
}

export default memo(Hero)