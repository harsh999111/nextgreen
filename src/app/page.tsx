import React from 'react'
import Main from '@/components/Main/page'
import Scroller from '@/components/Scroller/Scroller'
import Integrate from '@/components/Integrate/Integrate'
import Integration from '@/components/Integration/page'
import Transform from '@/components/Transform/Transform'


const Home = () => {
  return (
    <section className='h-full w-full '>
      <Main/>
      <Scroller/>
      <Integrate/>
      <Integration/>
      <Transform/>
    </section>
  )
}

export default Home;