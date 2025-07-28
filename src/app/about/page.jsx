'use client';
import React from 'react'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import HoriCaraousel from '@/components/HoriCaraousel'
import HistoryTimeline from '@/components/HistoryTimeline'
import FormModal from '@/components/FormModal';
import { useState } from 'react'

const aboutpage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);

  return (
    <>
      <div className={`${showForm ? 'blur-sm pointer-events-none select-none' : ''} flex flex-col items-center w-full overflow-x-hidden`}>
          <Navbar className='sticky w-full' onOpenForm={(type) => {
              console.log("Setting showForm true");
              setFormType(type);
              setShowForm(true);
            }}/>
        <div className="w-full px-2 md:px-0">
          <Hero form='false' img='/heroimages/about.png' tagline1='Legacy Living' tagline2="Building Future's" tagline3='lifestyle today' />
          {/* History Section */}
          <HistoryTimeline/>
          {/* Mission and Vision Section */}
          <h1 className='text-[var(--primary-color)] font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-20' data-aos='fade-right'>Our Mission & Vision</h1>
          <div className="flex justify-center items-stretch gap-6 md:gap-30 flex-col md:flex-row">
            <div className='bg-teal-600/20 backdrop-blur-md border border-teal-100/20 p-4 md:p-5 rounded-2xl w-full md:w-auto flex' data-aos='fade-down'>
              <Card text1='Our Mission' text2='At Legacy Living, our mission is to simplify the search for premium real estate by offering a seamless, intelligent platform that connects discerning buyers with curated, high-quality properties. We aim to empower our users with trust, transparency, and personalized experiences throughout their home journey.'/>
            </div>

            <div className='bg-teal-600/20 backdrop-blur-md border border-teal-100/20 p-4 md:p-5 rounded-2xl w-full md:w-auto flex' data-aos='fade-down'>
              <Card text1='Our Vision' text2='We envision becoming the most trusted and innovative destination for luxury real estate, where technology meets lifestyle. Our goal is to redefine how people discover, evaluate, and invest in exceptional living spaces—making high-end property access effortless, inspiring, and rewarding.'/>
            </div>
          </div>
          <div className="mt-16 md:mt-24">
            <HoriCaraousel reason='team' heading='Meet the Team'/>
          </div>
        </div>
      </div>
      {showForm && formType && <FormModal onClose={() => {setShowForm(false);setFormType(null);}} formType={formType} onSwitchForm={(type) => setFormType(type)}/>}
    </>
  )
}

export default aboutpage