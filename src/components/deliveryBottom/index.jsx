import React from 'react'

import './deliveryBottom.scss'
import price from '../../assets/delivery-bottom/price.png'
import delivery from '../../assets/delivery-bottom/delivery.png'
import deal from '../../assets/delivery-bottom/deal.png'
import assortiment from '../../assets/delivery-bottom/assortiment.png'
import returns from '../../assets/delivery-bottom/returns.png'


const DeliveryBottom = () => {
  return (
    <section className='delivery-bottom container row'>
        <div className="delivery-bottom__card row">
            <div className="delivery-bottom__card-img">
                <img src={price} alt="" />
            </div>
            <div className="delivery-bottom__card-desc">
                <h3>Best prices & offers</h3>
                <p>Orders $50 or more</p>
            </div>
        </div>
        <div className="delivery-bottom__card row">
            <div className="delivery-bottom__card-img">
                <img src={delivery} alt="" />
            </div>
            <div className="delivery-bottom__card-desc">
                <h3>Free delivery</h3>
                <p>24/7 amazing services</p>
            </div>
        </div>
        <div className="delivery-bottom__card row">
            <div className="delivery-bottom__card-img">
                <img src={deal} alt="" />
            </div>
            <div className="delivery-bottom__card-desc">
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
            </div>
        </div>
        <div className="delivery-bottom__card row">
            <div className="delivery-bottom__card-img">
                <img src={assortiment} alt="" />
            </div>
            <div className="delivery-bottom__card-desc">
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
            </div>
        </div>
        <div className="delivery-bottom__card row">
            <div className="delivery-bottom__card-img">
                <img src={returns} alt="" />
            </div>
            <div className="delivery-bottom__card-desc">
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
            </div>
        </div>
    </section>
  )
}

export default DeliveryBottom