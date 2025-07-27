import React, { useEffect, useState } from 'react'
import Card from './Card';
import PropertyModal from './PropertyModal';
import { AnimatePresence, motion } from 'framer-motion';

const PropertySection = ({properties}) => {
      
    console.log(properties, 'properties from property section');
    const [arr,setArr]=useState([])
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    useEffect(()=>{
      setArr(properties.regular)
    },[properties])

    const cardsPerPage = 6;
    const totalPages = Math.ceil(arr.length / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    const handleCardClick = (property) => {
      setSelectedProperty(property);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedProperty(null);
    };

    const currentCards = arr.slice(
      currentPage * cardsPerPage,
      currentPage * cardsPerPage + cardsPerPage
    );

  return (
    <>
      <div className='grid grid-cols-[auto_1fr_auto] items-stretch p-5 space-x-1.5'>
        <div className='flex items-center justify-center text-4xl font-bold bg-teal-500/20 text-white rounded-md shadow-2xl w-[5vw] h-[8vh] place-self-center'>
            <button onClick={handlePrev} disabled={currentPage === 0}>{`<`}</button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // triggers re-animation on page change
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] place-content-center ml-10 mt-10"
          >
            {currentCards.map((p,i)=>{
              return (
                <Card 
                  img={p.imageUris[0]} 
                  text1={p.title} 
                  text2={p.description}
                  property={p}
                  onCardClick={handleCardClick}
                  key={`${currentPage}-${i}`}
                />
              )
            })}
          </motion.div>
        </AnimatePresence>
        <div className='flex items-center justify-center text-4xl font-bold bg-teal-500/20 text-white rounded-md shadow-2xl w-[5vw] h-[8vh] place-self-center'>
            <button onClick={handleNext} disabled={currentPage === totalPages - 1}>{`>`}</button>
        </div>
      </div>

      {/* Property Modal */}
      <AnimatePresence>
        {showModal && selectedProperty && (
          <PropertyModal 
            property={selectedProperty} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </>
  )

}

export default PropertySection