import React from 'react'

import './featured.scss'
import { FEATURED_CATEGORIES, FEATURED_CATEGORY } from '../../static'


let  card = FEATURED_CATEGORIES?.map(el => (
    <div className="card" key={el.id} style={{background: `${el.color}`}}>
        <div className="card__img">
            <img src={el.img} alt="" />
        </div>
        <div className="card__desc">
            <h4>{el.title}</h4>
            <p>{el.desc}</p>
        </div>
    </div>
))

let bottonCard = FEATURED_CATEGORY?.map(el => (
    <div className="featured__bottom__card" key={el.id} style={{background: `url(${el.img})`}}>
        <h1>{el.title}</h1>
        <button>Shop Now</button>
    </div>
))
const Featured = () => {
  return (
    <section className='featured container'>
        <div className="featured__top">
            <div className="featured__top__desc row">
                <h1>Featured Ctaegories</h1>
                <p>Cake & Milk</p>
                <p>Coffe & Teas</p>
                <p>Pet Foods</p>
                <p>Vegetables</p>
            </div>
            <div className="featured__top__cards">
                {card}
            </div>
        </div>
        <div className="featured__bottom">
            {bottonCard}
        </div>
    </section>
  )
}

export default Featured