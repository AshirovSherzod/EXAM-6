import React from 'react'

import './featured.scss'
import { FEATURED_CATEGORIES } from '../../static'

let  card = FEATURED_CATEGORIES?.map(el => (
    <div className="featured__middle__card" key={el.id} style={{background: `${el.color} no-repeat center`}}>
        <div className="featured__middle__card-img">
            <img src={el.img} alt="" />
        </div>
        <div className="featured__middle__card-desc">
            <h4>{el.title}</h4>
            <p>{el.desc}</p>
        </div>
    </div>
))

const Featured = () => {
  return (
    <section className='featured container'>
        <div className="featured__top row">
            <h1>Featured Categories</h1>
            <p>Cake & Milk</p>
            <p>Coffe & Teas</p>
            <p>Pet Foods</p>
            <p>Vegetables</p>
        </div>
        <div className="featured__middle row">
            {card}
        </div>
        <div className="featured__bottom row">
            <div className="featured__bottom__card onion">
                <h1>Everyday Fresh & <br /> Clean with Our Products</h1>
                <button>Shop Now</button>
            </div>
            <div className="featured__bottom__card water">
                <h1>Make your Breakfast <br /> Healthy and Easy</h1>
                <button>Shop Now</button>
            </div>
            <div className="featured__bottom__card vegetables">
                <h1>The best Organic <br /> Products Online</h1>
                <button>Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default Featured