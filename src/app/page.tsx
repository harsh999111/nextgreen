import React from 'react'
import Home1 from '../app/Home/page'
import Navbar from '../components/Navbar/Navbar'
import Main from '@/components/Main/page'
import Scroller from '@/components/Scroller/Scroller'
import Integrate from '@/components/Integrate/Integrate'
import Integration from '@/components/Integration/page'
import Transform from '@/components/Transform/Transform'

const Home = () => {
  return (
    <section className='h-full w-full px-6  lg:px-20 py-6 space-y-6 2xl:px-48'>
      <Navbar/>
      <Main/>
      <Scroller/>
      <Integrate/>
      <Integration/>
      <Transform/>
    </section>
  )
}

export default Home;