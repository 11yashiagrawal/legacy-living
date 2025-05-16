import React, { useEffect, useState } from 'react'
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';

const PropertySection = ({properties}) => {
    // const arr=[]
    // for (let i = 0; i + 6 <= properties.length; i += 6) {
    //     arr.push(
    //       <div key={i} className="grid grid-cols-3 gap-4 mb-8">
    //         {properties.slice(i, i + 6).map((property, index) => (
    //           <Card img={property.propertyImage} text1={property.name} text2={property.description} />
    //         ))}
    //       </div>
    //     );
    //   }
    
    // const remaining = properties.length % 6;
    // if (remaining !== 0) {
    //     const startIndex = properties.length - remaining;
    //     arr.push(
    //       <div key="remaining" className="grid grid-cols-3 gap-4 mb-8">
    //         {properties.slice(startIndex).map((property, index) => (
    //           <Card img={property.propertyImage} text1={property.name} text2={property.description} />
    //         ))}
    //       </div>
    //     );
    //   }
    
    console.log(properties, 'properties from property section');
    const [arr,setArr]=useState([])
    useEffect(()=>{
      setArr(properties)
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

    const currentCards = arr.slice(
      currentPage * cardsPerPage,
      currentPage * cardsPerPage + cardsPerPage
    );

  return (
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
            return (<Card img={p.propertyImages.mainImageSrc} text1={p.customer.branchDisplayName.split(',')[0]} text2={p.summary} role={p.price.displayPrices[0].displayPrice} key={`${currentPage}-${i}`}/>)
          })}
        </motion.div>
      </AnimatePresence>
      <div className='flex items-center justify-center text-4xl font-bold bg-teal-500/20 text-white rounded-md shadow-2xl w-[5vw] h-[8vh] place-self-center'>
          <button onClick={handleNext} disabled={currentPage === totalPages - 1}>{`>`}</button>
      </div>
    </div>
  )

}

export default PropertySection