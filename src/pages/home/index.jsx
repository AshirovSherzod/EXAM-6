import React, { memo } from 'react'
import Hero from '../../components/hero'
import Featured from '../../components/featured'

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
    </main>
  )
}

export default memo(Home)