import React from 'react'
import Hero from '../../components/Hero'
import HoriCaraousel from '@/components/HoriCaraousel'

const blogpage = () => {
  return (
    <div>
      <Hero form='false' img='/heroimages/blog.png' tagline1='Latest Insights' tagline2='The Stories Behind' tagline3='Great Spaces.'/>
      <HoriCaraousel reason='blogposts1' heading='Exploring Homeownership and Property Choices'/>
      <HoriCaraousel reason='blogposts2' heading='Maximizing Your Home Search Experience'/>
      <HoriCaraousel reason='blogposts3' heading='Smart Living and Real Estate Insights'/>
    </div>
  )
}

export default blogpage