import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className='min-h-[calc(100vh-328px)]'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Root
