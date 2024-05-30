import React, { memo, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import axios from '../../api';


import './products.scss'
import { NavLink } from 'react-router-dom';





const Products = () => {
    
    const [offset, setOffset] = useState(1)
    const [data, setData] = useState(null)
    const [category, setCategory] = useState(null)
    const [loading ,setLoading] = useState(false)
    const perPageCount = 10

    const getData = (api, setFunc) => {
        setLoading(true)
            axios
                .get(api, {
                    params: {
                        limit: perPageCount * offset
                }})
                .then(res => {
                    setFunc(res)
                })
                .catch(err => console.log(err))
                .finally(() =>setLoading(false))
    }

    useEffect(()=>{
        getData("/products", setData, setLoading)
    }, [offset])
    
    useEffect(()=> {
        getData("/products/category-list", setCategory)
    }, [])

    let categoryLi = category?.data.map(el => (
        <li key={el}>{el}</li>
    ))

    let card = data?.data.products.map(el => (
        <div className="products__cards__card " key={el.id}>
            <div className="products__cards__card-img">
                <NavLink to={`/singlepage/${el.id}`}>
                    <img src={el.images[0]} alt={el.title} />
                </NavLink>
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
                <ul className='row'>
                    {categoryLi}
                </ul>
            </div>
        </div>
            { 
                loading
                ?
                <div className="products__loading">
                    {LoadingCard(offset * perPageCount)}
                </div>
                : 
                <>
                <div className="products__cards">{card} </div>
                <button className="products__cards__btn" onClick={() => setOffset((p) => p + 1)}>See more</button>
                </>
            }
    </section>
  )
}


export default memo(Products)

{/*  */}
