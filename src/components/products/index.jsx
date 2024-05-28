import React, { memo, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";


import './products.scss'
import useFetch from '../../hooks/useFetch'


const Products = () => {
    const [offset, setOffset] = useState(1)
    const {data, loading, error} = useFetch(`/products?limit=15`)

    let card = data?.products.map(el => (
        <div className="products__cards__card " key={el.id}>
            <div className="products__cards__card-img">
                <img src={el.images[0]} alt={el.title} />
            </div>
            <div className="products__cards__card-desc">
                <p className='category-name'>{el.category}</p>
                <h2 title={el.title} className='line-clamp'>{el.title}</h2>
                <div className="products__cards__card-rate row">
                    <FaStar className='icon'/>
                    <p>({el.rating})</p>
                </div>
                <p>By <span>NestFood</span></p>
                <div className="products__cards__card-btns row">
                    <h5>${el.price}</h5>
                    <button>Add</button>
                </div>
            </div>
        </div>
    ))

    const LoadingCard = (count) => {
        let arr = []
        for(let i = 0; i < count; i++) {
            arr.push(
            <div className="products__loading__card" key={i}>
                <div className="products__loading__card-img"></div>
                <div className="products__loading__card-desc">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
            )
        }
        return arr
    }
  return (
    <section className='products container'>
        <div className="products__desc">
            <h1>Popolar Products</h1>
            <div className="products__desc__cetegory">
                {}
            </div>
        </div>
        <div className="products__cards">{card} </div>
    </section>
  )
}

{/* {
    loading
    ?
    <>
    </>
    :
    <div className="products__loading">
        {LoadingCard(10)}
    </div>
    
} */}
export default memo(Products)
