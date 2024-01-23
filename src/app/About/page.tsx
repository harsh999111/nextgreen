import Aboutfeature from '@/components/Aboutfeature/Aboutfeature'
import ABoutgreen from '@/components/Aboutgreen/Aboutgreen'
import Aboutnext from '@/components/Aboutnext/Abotgreen'
import React from 'react'

const About = () => {
  return (
    <section className='h-full w-full'>
            <ABoutgreen/>
            <Aboutfeature/>
            <Aboutnext/>
    </section>
  )
}

export default About