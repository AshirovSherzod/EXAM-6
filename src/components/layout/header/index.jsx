import React, { memo, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { NavLink } from 'react-router-dom';


import './header.scss'
import logo from '../../../assets/header-logo.svg'
import img from '../../../assets/icon-headphone.svg'
import axios from '../../../api';

const Header = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(`/products/search?q=${value}`)
            .then(res => setData(res.data.products))
            .catch(err => console.log(err))
    }, [value])

    let searchItems = data?.map((el) => (
        <NavLink to={`/singlepage/${el.id}`} key={el.id}>
            <div className="form__search-element__card">
                <img src={el.images[0]} alt="" />
                <span>{el.title}</span>
            </div>
        </NavLink>
    ));




    console.log(value);    
  return (
    <>
    <div className='sub-header'>
        <div className="container row sub-header__ul">
            <ul className='row'>
                <li><a href="">About Us</a></li>
                <li><a href="">My Account</a></li>
                <li><a href="">Wishlist</a></li>
                <li><a href="">Order Tracking</a></li>
            </ul>
            <ul className='row'>
                <li><a href="">Need help? Call Us:+ 1800 900</a></li>
                <li><a href="">English</a></li>
                <li><a href="">USD</a></li>
            </ul>
        </div>
    </div>
    <header className='header '>
        <nav className='header__nav container row'>
            <div className="header__nav__left row">
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
                <form action="" className="header__nav__form">
                    <select name="" id="">
                        <option value="">All Categories</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder='Search for items...' 
                        required 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}

                    />
                    <button><CiSearch /></button>
                    {
                        value 
                        ?
                        <div className="form__search-element">{
                            data && data?.length === 0 
                            ? (<h3>Malumot topilmadi</h3>) 
                            : (<>{searchItems}</>)
                        }</div>
                        :
                        <></>
                    }
                </form>
            </div>
            <div className="header__nav__right">
                <ul className='row'>
                    <li><a href=""><IoPersonOutline className='svg'/> Account</a></li>
                    <li><FaBars /></li>
                </ul>
            </div>
        </nav>
    </header>
    <div className="under-header">
        <div className="container row under-header__content">
            <div className="under-header__left">
                <select name="" id="">
                    <option value=""> Browse All Ctegories</option>
                </select>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/admin"}>Admin</NavLink>
            </div>
            <div className="under-header__right row">
                <img src={img} alt="" />
                <div className="under-header__right-desc">
                    <h3>1900 - 888</h3>
                    <p>24/7 Support Center</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default memo(Header)