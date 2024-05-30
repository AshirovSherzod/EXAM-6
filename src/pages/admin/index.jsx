import React from 'react'

import './admin.scss'
import img from '../../assets/admin-bg.png'
import Delivery from '../../components/delivery'
import AdminPanel from '../../components/adminPanel'
import AdminMap from '../../components/adminMap'

const Admin = () => {
  return (
    <main>
      <AdminPanel/>
      <AdminMap />
      <Delivery img={img}/>
    </main>
  )
}

export default Admin