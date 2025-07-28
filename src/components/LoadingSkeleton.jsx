import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] items-stretch p-5 space-x-1.5'>
      {/* Left Navigation Button Skeleton */}
      <div className='flex items-center justify-center text-4xl font-bold bg-gray-200 text-gray-400 rounded-md shadow-2xl w-[5vw] h-[8vh] place-self-center animate-pulse'>
        <div className='w-6 h-6 bg-gray-300 rounded'></div>
      </div>
      
      {/* Cards Grid */}
      <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full max-w-7xl mx-auto px-4 mt-10">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center space-y-3 w-full max-w-sm p-4 animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200 rounded-md animate-pulse"></div>
            
            {/* Title Skeleton */}
            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
            
            {/* Description Skeleton */}
            <div className="w-full space-y-2">
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right Navigation Button Skeleton */}
      <div className='flex items-center justify-center text-4xl font-bold bg-gray-200 text-gray-400 rounded-md shadow-2xl w-[5vw] h-[8vh] place-self-center animate-pulse'>
        <div className='w-6 h-6 bg-gray-300 rounded'></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton; 