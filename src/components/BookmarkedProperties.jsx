import React, { useState, useEffect } from 'react'
import Card from './Card';
import PropertyModal from './PropertyModal';
import { AnimatePresence, motion } from 'framer-motion';
import { BookmarkIcon } from '@heroicons/react/24/outline';

const BookmarkedProperties = () => {
  const [bookmarkedProperties, setBookmarkedProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load bookmarked properties from localStorage
  useEffect(() => {
    const loadBookmarkedProperties = () => {
      const stored = localStorage.getItem('bookmarkedProperties');
      if (stored) {
        setBookmarkedProperties(JSON.parse(stored));
      }
    };

    loadBookmarkedProperties();
    
    // Listen for storage changes (when properties are bookmarked/unbookmarked from other components)
    const handleStorageChange = () => {
      loadBookmarkedProperties();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('bookmarkChange', handleStorageChange); // Listen for custom event
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bookmarkChange', handleStorageChange);
    };
  }, []);

  const handleCardClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const removeBookmark = (propertyId) => {
    const updatedBookmarks = bookmarkedProperties.filter(p => p.id !== propertyId);
    setBookmarkedProperties(updatedBookmarks);
    localStorage.setItem('bookmarkedProperties', JSON.stringify(updatedBookmarks));
    
    // Trigger custom event to update other components
    window.dispatchEvent(new Event('bookmarkChange'));
  };

  if (bookmarkedProperties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <BookmarkIcon className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-600 mb-2">No Bookmarked Properties</h2>
        <p className="text-gray-500 text-center max-w-md">
          You haven't bookmarked any properties yet. Browse our listings and click the bookmark icon to save your favorites!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center p-2 md:p-5 mt-10 md:mt-20 space-y-12 md:space-y-16'>
        {/* Header */}
        <div className="w-full px-2 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              Your Bookmarked Properties
            </h1>
            <p className="text-gray-600">
              You have {bookmarkedProperties.length} bookmarked propert{bookmarkedProperties.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full px-2 md:px-6"
          >
            {bookmarkedProperties.map((property, index) => (
              <div key={property.id} className="relative group">
                <Card 
                  img={property.imageUris?.[0]} 
                  text1={property.title} 
                  text2={property.description}
                  property={property}
                  onCardClick={handleCardClick}
                />
                {/* Remove Bookmark Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeBookmark(property.id);
                  }}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  title="Remove from bookmarks"
                >
                  <BookmarkIcon className="w-4 h-4 fill-current" />
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
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
  );
};

export default BookmarkedProperties; 