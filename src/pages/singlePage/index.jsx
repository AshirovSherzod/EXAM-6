import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown, IoIosHeartEmpty, IoMdGitCompare   } from "react-icons/io";


import './singlePage.scss'
import axios from '../../api'
import img1 from '../../assets/category/category-1.png'
import img2 from '../../assets/category/category-2.png'
import img3 from '../../assets/category/category-3..png'
import img4 from '../../assets/category/category-4.png'
import img5 from '../../assets/category/category-5.png'
import slider from '../../assets/category/category-slider.svg'
import cardigan from '../../assets/category/category-cardigan.png'
import banana from '../../assets/category/category banana.png'
import jacket from '../../assets/category/category-jacket.png'
import up from '../../assets/category/up-arrow.png'
import down from '../../assets/category/down-arrow.png'



const SinglePage = () => {
  let { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(()=> {
    setLoading(true)
    axios
      .get(`/products/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
      .finally(() =>setLoading(false))
  }, [])

  console.log(data);
  return (
    <main className='category container'>
      <div className="category__details">
        <div className="category__items">
          <div className="category__item">
            <div className="category__item-img">
              <img src={data?.thumbnail} alt="" />
            </div>
            <div className="category__item-desc">
              <h2>{data?.title}</h2>
              <p><FaStar className='icon'/> <span>({data?.rating})</span></p>
              <h1>${data?.price}</h1>
              <p>{data?.description}</p>
              <div className="category__item-desc-btns row">
                <div className="category__item-desc-btns__counter row">
                  <button className='category__item-desc-btn'>1</button>
                  <div className="category__item-desc-btns__counter-right">
                    <button><img src={up} alt="" /></button>
                    <button><img src={down} alt="" /></button>
                  </div>
                </div>
                <button className='category__item-desc-btns__cart'>Add to Cart</button>
                <button className='category__item-desc-btns__heart'><IoIosHeartEmpty className='icons'/></button>
                <button className='category__item-desc-btns__compare'><IoMdGitCompare className='icons'/></button>
              </div>
            </div>
          </div>
          <div className="category__item__desc">
            <div className="category__item__desc__delivery">
              <h4>Packaging & Delivery</h4>
              <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
              <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
            </div>
            <div className="category__item__desc__ingredients">
              <h4>Other Ingredients</h4>
              <p>Organic raw pecans, organic raw cashews.</p>
              <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
              <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
            </div>
            <div className="category__item__desc__warnings">
              <h4>Warnings</h4>
              <p>Oil separation occurs naturally. May contain pieces of shell.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="category-right">
        <div className="category-right__cards">
          <h4>Category</h4>
          <div className="category-right__cards-card row">
              <img src={img1} alt="" />
              <p>Milks & Dairies</p>
          </div>
          <div className="category-right__cards-card row">
              <img src={img2} alt="" />
              <p>Clothing</p>
          </div>
          <div className="category-right__cards-card row">
              <img src={img3} alt="" />
              <p>Pet Foods</p>              
          </div>
          <div className="category-right__cards-card row">
              <img src={img4} alt="" />
              <p>Baking material</p>           
          </div>
          <div className="category-right__cards-card row">
              <img src={img5} alt="" />
              <p>Fresh Fruit</p>
          </div>
        </div>
        <div className="category-right__cards category-right__fill">
          <h4>Fill by Price</h4>
          <img src={slider} alt="" />
          <form action="">
            <h5>Color</h5>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">Red (12)</label>
            </div>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">Green (12)</label>
            </div>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">Blue (12)</label>
            </div>
          </form>
          <form action="">
            <h5>Item Condition</h5>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">New (1234)</label>
            </div>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">Refurbished (12)</label>
            </div>
            <div className="form__checkbox row">
              <input type="checkbox" />
              <label htmlFor="">Used (12)</label>
            </div>
          </form>
          <button>Filter</button>
        </div>
        <div className="category-right__cards">
          <h4>New Products</h4>
          <div className="category-right__cards-card row">
            <img src={cardigan} alt="" />
            <div className="category-right__cards__card-desc">
              <h5>Chen Cardigan</h5>
              <p>$99.10</p>
            </div>
          </div>
          <div className="category-right__cards-card row">
            <img src={banana} alt="" />
            <div className="category-right__cards__card-desc">
              <h5>Chen Sweater</h5>
              <p>$99.20</p>
            </div>
          </div>
          <div className="category-right__cards-card row">
            <img src={jacket} alt="" />
            <div className="category-right__cards__card-desc">
              <h5>Colorful Jacket</h5>
              <p>$25</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default memo(SinglePage)