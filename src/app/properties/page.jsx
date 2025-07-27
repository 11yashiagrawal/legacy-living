'use client';
import Hero from '@/components/Hero'
import React from 'react'
import FormModal from '@/components/FormModal';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import useUserStore from '@/store/userStore';
import PropertySection from '@/components/PropertySection';

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
      <div className={`${showForm ? 'blur-sm pointer-events-none select-none' : ''}`}>
          <Navbar className='sticky' onOpenForm={(type) => {
              console.log("Setting showForm true");
              setFormType(type);
              setShowForm(true);
            }}/>
          <Hero img='/heroimages/properties.jpg' tagline1='Browse Quality' tagline2='Homes for' tagline3='Every Lifestyle.'/>
          
          {apidata.length===0?<>Loading...</>:<PropertySection properties={apidata.listings}/>}
          
          
      </div>
      {showForm && formType && <FormModal onClose={() => {setShowForm(false);setFormType(null);}} formType={formType} onSwitchForm={(type) => setFormType(type)}/>}
    </>
  )
}

export default Productspage