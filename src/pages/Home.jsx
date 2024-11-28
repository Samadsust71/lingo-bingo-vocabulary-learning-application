import React from 'react'
import Banner from '../components/Banner'
import AboutSection from '../components/AboutSection'
import SuccessSection from '../components/SuccessSection'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto space-y-10'>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <SuccessSection></SuccessSection>
      </section>
      <section className=''>
        <AboutSection></AboutSection>
      </section>
      
    </div>
  )
}

export default Home
