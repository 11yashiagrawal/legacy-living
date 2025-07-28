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
      <div className='flex flex-col items-center justify-center p-2 md:p-5 space-y-12 md:space-y-16'>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // triggers re-animation on page change
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full max-w-7xl mx-auto px-2 md:px-4"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex items-center justify-center space-x-4 mt-12 md:mt-16'>
            {/* Previous Button */}
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 0}
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 ${
                currentPage === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-teal-800 text-white hover:bg-teal-900 hover:scale-110'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className='flex items-center space-x-2'>
              {(() => {
                const pages = [];
                const startPage = Math.max(0, Math.min(currentPage - 1, totalPages - 2));
                const endPage = Math.min(startPage + 2, totalPages);
                
                for (let i = startPage; i < endPage; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 font-semibold ${
                        currentPage === i
                          ? 'bg-teal-800 text-white scale-110'
                          : 'bg-white text-teal-800 hover:bg-teal-50 hover:scale-105 border-2 border-teal-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                }
                return pages;
              })()}
            </div>

            {/* Next Button */}
            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages - 1}
              className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 ${
                currentPage === totalPages - 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-teal-800 text-white hover:bg-teal-900 hover:scale-110'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
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