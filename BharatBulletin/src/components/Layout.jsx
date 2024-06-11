import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout