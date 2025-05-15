'use client';
import React from 'react'
import Hero from '../../components/Hero'
import HoriCaraousel from '@/components/HoriCaraousel'
import FormModal from '@/components/FormModal';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const blogpage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  
  return (
    <>
      <div className={`${showForm ? 'blur-sm pointer-events-none select-none' : ''}`}>
          <Navbar className='sticky' onOpenForm={(type) => {
              console.log("Setting showForm true");
              setFormType(type);
              setShowForm(true);
            }}/>
        <Hero form='false' img='/heroimages/blog.png' tagline1='Latest Insights' tagline2='The Stories Behind' tagline3='Great Spaces.'/>
        <HoriCaraousel reason='blogposts1' heading='Exploring Homeownership and Property Choices'/>
        <HoriCaraousel reason='blogposts2' heading='Maximizing Your Home Search Experience'/>
        <HoriCaraousel reason='blogposts3' heading='Smart Living and Real Estate Insights'/>
      </div>
      {showForm && formType && <FormModal onClose={() => {setShowForm(false);setFormType(null);}} formType={formType} onSwitchForm={(type) => setFormType(type)}/>}
    </>
  )
}

export default blogpage