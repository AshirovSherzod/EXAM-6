import React from 'react'
import './delivery.scss'

const Delivery = ({img}) => {
  return (
    <section className='delivery container' style={{background: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="delivery__desc">
            <h1>Stay home & get your daily <br /> needs from our shop</h1>
            <p>Start You'r Daily Shopping with Nest Mart</p>
        </div>
        <form action="">
            <input type="text" placeholder='Your emaill address'/>
            <button>Subscribe</button>
        </form>
    </section>
  )
}

export default Delivery