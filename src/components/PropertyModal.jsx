import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MapPinIcon, CurrencyPoundIcon, BuildingOfficeIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;
  
  console.log('Property data:', property);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Debug: Log the property structure to see available image fields
  console.log('Property image fields:', {
    imageUris: property.imageUris,
    images: property.images,
    imageUrls: property.imageUrls,
    photos: property.photos,
    media: property.media
  });
  
  // Try different possible image field names
  const images = (property.imageUris || property.images || property.imageUrls || property.photos || property.media || []).slice(0, 5);
  const totalImages = images.length;
  
  console.log('Processed images:', images);
  console.log('Total images:', totalImages);

  const formatPrice = (price) => {
    if (!price) return 'Price on request';
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper function to safely render property values
  const safeRender = (value) => {
    if (value === null || value === undefined) return 'N/A';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  // Helper function to get location string
  const getLocationString = (property) => {
    if (property.location) return safeRender(property.location);
    if (property.address) return safeRender(property.address);
    if (property.coordinates) {
      const coords = property.coordinates;
      if (typeof coords === 'object' && coords.latitude && coords.longitude) {
        return `${coords.latitude}, ${coords.longitude}`;
      }
    }
    return 'Location not available';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Keyboard navigation and body scroll prevention
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (totalImages <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore body scroll when modal is closed
      document.body.style.overflow = originalStyle;
    };
  }, [totalImages, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-2">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col lg:flex-row overflow-hidden relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6 text-gray-600" />
        </button>
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 relative m-2 sm:m-4 flex-shrink-0 h-48 sm:h-64 lg:h-full">

          {/* Main Image Display */}
          <div className="relative rounded-xl overflow-hidden h-full" style={{ 
            width: 'calc(100% - 2rem)' ,
            height: 'calc(100% - 2rem)'
          }}>
            {totalImages > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Property ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', images[currentImageIndex]);
                      e.target.style.display = 'none';
                      // Show fallback content
                      const fallback = e.target.parentElement.querySelector('.image-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', images[currentImageIndex]);
                    }}
                  />
                  
                  {/* Fallback when image fails to load */}
                  <div className="image-fallback hidden absolute inset-0 bg-gray-200 items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 text-lg mb-2">Image not available</p>
                      <p className="text-gray-400 text-sm">URL: {images[currentImageIndex]}</p>
                    </div>
                  </div>
                  
                  {/* Image Overlay with Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h1 className="text-white text-2xl md:text-3xl font-bold">{safeRender(property.title)}</h1>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-lg">No images available</p>
              </div>
            )}

            {/* Navigation Buttons */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors z-10"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors z-10"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {totalImages > 1 && (
              <div className="absolute bottom-8 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                {currentImageIndex + 1} / {totalImages}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 m-4 p-6 overflow-y-auto overflow-x-hidden rounded-xl flex-1 min-h-0">
          {/* Title and Address */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-teal-800 mb-3">{safeRender(property.title)}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPinIcon className="w-5 h-5 text-teal-600" />
              <p className="text-lg">{safeRender(property.address)}</p>
            </div>
            
            {/* Property Features and Price */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Property Features */}
              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                  </svg>
                  <span className="text-gray-700 break-words">{safeRender(property.attributes.bedrooms || 0)} Bedrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    {/* Bathtub */}
                    <path d="M4 12h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
                    <path d="M6 10h12v2H6v-2z" />
                    {/* Tub feet */}
                    <path d="M5 18h2v2H5v-2z" />
                    <path d="M17 18h2v2h-2v-2z" />
                    {/* Water level */}
                    <path d="M6 14h12v1H6v-1z" />
                    {/* Bubbles */}
                    <circle cx="8" cy="13" r="1" />
                    <circle cx="10" cy="12" r="0.8" />
                    <circle cx="12" cy="13" r="0.6" />
                    {/* Shower pipe */}
                    <path d="M18 8v4" />
                    <path d="M18 8c0-2 2-4 4-4" />
                    {/* Shower head */}
                    <path d="M20 4h4v2h-4v-2z" />
                    {/* Water droplets */}
                    <path d="M21 6l-1 2M22 6l-1 2M23 6l-1 2" />
                    <path d="M20 7l-1 2M21 7l-1 2M22 7l-1 2" />
                  </svg>
                  <span className="text-gray-700 break-words">{safeRender(property.attributes.bathrooms || 0)} Bathrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700 break-words">{safeRender(property.attributes.livingRooms || property.attributes.receptionRooms || 0)} Living Rooms</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="flex items-center flex-shrink-0 w-full lg:w-auto">
                <span className="text-3xl font-bold text-teal-600 break-words">{safeRender(property.pricing.label)}</span>
              </div>
            </div>

            {/* Agent Phone Number */}
            {property.agent && property.agent.phone && (
              <div className="mt-6 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-teal-600" />
                  <div>
                    <p className="text-sm text-gray-600">Agent Phone</p>
                    <p className="text-lg font-semibold text-teal-800">{safeRender(property.agent.phone)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
          

          

           
              
      </motion.div>
    </div>
  );
};

export default PropertyModal; 