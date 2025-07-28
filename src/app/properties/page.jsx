'use client';
import Hero from '@/components/Hero'
import React from 'react'
import FormModal from '@/components/FormModal';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import useUserStore from '@/store/userStore';
import PropertySection from '@/components/PropertySection';
import LoadingSkeleton from '@/components/LoadingSkeleton';

const Productspage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const { apidata, fetchData } = useUserStore();
  const [data, setData]=useState([]);
  useEffect(()=>{
    console.log(apidata,'apidata from page');
    setData(apidata.listings);
  },[apidata])

  useEffect(()=>{
    fetchData();
  },[])

  console.log(apidata)
  
  return (
    <>
      <div className={`${showForm ? 'blur-sm pointer-events-none select-none' : ''} flex flex-col items-center w-full overflow-x-hidden`}>
          <Navbar className='sticky w-full' onOpenForm={(type) => {
              console.log("Setting showForm true");
              setFormType(type);
              setShowForm(true);
            }}/>
          <div className="w-full px-2 md:px-0">
            <Hero img='/heroimages/properties.jpg' tagline1='Browse Quality' tagline2='Homes for' tagline3='Every Lifestyle.'/>
            
            <div className="mt-16 md:mt-24">
              {apidata.length === 0 ? <LoadingSkeleton /> : <PropertySection properties={apidata.listings}/>}
            </div>
          </div>
      </div>
      {showForm && formType && <FormModal onClose={() => {setShowForm(false);setFormType(null);}} formType={formType} onSwitchForm={(type) => setFormType(type)}/>}
    </>
  )
}

export default Productspage