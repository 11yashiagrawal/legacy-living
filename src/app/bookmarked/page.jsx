'use client';
import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import BookmarkedProperties from '@/components/BookmarkedProperties'
import FormModal from '@/components/FormModal';
import { useState } from 'react'

const BookmarkedPage = () => {
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
        <BookmarkedProperties />
      </div>
      {showForm && formType && <FormModal onClose={() => {setShowForm(false);setFormType(null);}} formType={formType} onSwitchForm={(type) => setFormType(type)}/>}
    </>
  )
}

export default BookmarkedPage 