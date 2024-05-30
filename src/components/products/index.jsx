import React, { memo, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import axios from '../../api';
import { Link, useNavigate } from 'react-router-dom';


import './products.scss'





const Products = () => {

    const navigate = useNavigate();

    const [offset, setOffset] = useState(1)
    const [data, setData] = useState(null)
    const [category, setCategory] = useState(null)
    const [catigory, setCatigory] = useState("all")
    const [loading, setLoading] = useState(false)
    const perPageCount = 10
    console.log(catigory);
    const getData = (api, setFunc) => {
        setLoading(true)
        let newData = catigory === "all" ? "/products" : `/products/category/${catigory}`
        console.log(newData);
        axios
            .get(newData, {
                params: {
                    limit: perPageCount * offset
                }
            })
            .then(res => {
                setFunc(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        getData("", setData)
    }, [offset,catigory])

    useEffect(() => {
        axios
            .get("/products/category-list")
            .then(res=> setCategory(res.data))
            .catch(err => console.log(err))
    }, [])

    let categoryLi = category?.map((el) => (
        <li key={el}>
            <data onClick={(e)=> setCatigory(e.target.value)} value={el}>{el}</data>
        </li>
    ))

    let card = data?.data.products.map(el => (
        <div className="products__cards__card " key={el.id}>
            <div className="products__cards__card-img">
                <div onClick={() => navigate(`/singlepage/${el.id}`)}>
                    <img src={el.images[0]} alt={el.title} />
                </div>
            </div>
            <div className="products__cards__card-desc">
                <p className='category-name'>{el.category}</p>
                <h2 title={el.title} className='line-clamp'>{el.title}</h2>
                <div className="products__cards__card-rate row">
                    <FaStar className='icon' />
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
        for (let i = 0; i < count; i++) {
            arr.push(
                <div className="products__loading__card" key={i}>
                    <div className="products__loading__card-img"></div>
                    <div className="products__loading__card-desc">
                        <div className=""></div>
                        <div className="last-child"></div>
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
                    <li>
                        <data onClick={(e)=> setCatigory(e.target.value)} value={"all"}>All</data>
                    </li>
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

{/*  */ }
