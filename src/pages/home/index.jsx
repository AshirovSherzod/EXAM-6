import React, { memo } from 'react'

import Hero from '../../components/hero'
import Featured from '../../components/featured'
import Products from '../../components/products'
import Delivery from '../../components/delivery'
import DeliveryBottom from '../../components/deliveryBottom'
import img from '../../assets/delivery.png'

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Products />
      <Delivery img={img}/>
      <DeliveryBottom />
    </main>
  )
}

export default memo(Home)