'use client';
import React from 'react'
import Hero from '../components/Hero'
import HoriCaraousel from '@/components/HoriCaraousel'
import SectionCard from '@/components/SectionCard'
import SearchBar from '@/components/SearchBar'
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const homepage = () => {
  useEffect(() => {
    const AOS = require('aos'); // Import AOS library
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with optional settings

    AOS.refresh();
    setTimeout(() => {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div>
      <SearchBar icon='search'/>
      <Hero form='true' img='/heroimages/home.jpg' tagline1='Legacy Living' tagline2='Rent smarter.' tagline3='Live better.'/>
      {/* featured products */}
      <HoriCaraousel reason='featuredProp' heading='Featured Properties'/>
      <SectionCard reason='firstSellingPoint' text='Smart Search, Smarter Living' description='Effortlessly find rental properties tailored to your budget, preferred location, and lifestyle — all in a few clicks.' icon='home' reverse='false'/>
      <SectionCard reason='secondSellingPoint' text='Save & Compare Your Favorites' description='Bookmark listings you love and revisit them anytime — complete with details, amenities, and real user reviews to help you decide with confidence.' icon='heart' reverse='true'/>
      {/* testimonials */}
      <HoriCaraousel reason='testimonials' heading='What our Customers Say'/>
    </div>
  )
}

export default homepage