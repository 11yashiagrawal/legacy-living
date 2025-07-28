import React, { useEffect, useState, useMemo } from 'react'
import Card from './Card';
import PropertyModal from './PropertyModal';
import { AnimatePresence, motion } from 'framer-motion';

const PropertySection = ({properties}) => {
      
    console.log(properties, 'properties from property section');
    const [arr,setArr]=useState([])
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    // Filter states
    const [locationFilter, setLocationFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [bedroomsFilter, setBedroomsFilter] = useState('');
    const [bathroomsFilter, setBathroomsFilter] = useState('');
    const [livingRoomsFilter, setLivingRoomsFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    
    useEffect(()=>{
      setArr(properties.regular)
    },[properties])

    const cardsPerPage = 6;
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

    // Filter properties based on selected filters
    const filteredProperties = useMemo(() => {
      return arr.filter(property => {
        // Location filter
        if (locationFilter && !property.address?.toLowerCase().includes(locationFilter.toLowerCase())) {
          return false;
        }
        
        // Type filter
        if (typeFilter) {
          const title = property.title?.toLowerCase() || '';
          if (typeFilter === 'flat' && !title.includes('flat')) {
            return false;
          }
          if (typeFilter === 'house' && !title.includes('house')) {
            return false;
          }
        }
        
        // Price filter
        if (priceFilter && property.pricing?.value) {
          const price = parseFloat(property.pricing.value);
          const filterPrice = parseFloat(priceFilter);
          
          if (priceFilter.includes('under') && price >= filterPrice) {
            return false;
          }
          if (priceFilter.includes('over') && price <= filterPrice) {
            return false;
          }
        }
        
        // Bedrooms filter
        if (bedroomsFilter && property.attributes?.bedrooms) {
          const bedrooms = parseInt(property.attributes.bedrooms);
          const filterBedrooms = parseInt(bedroomsFilter);
          
          if (bedroomsFilter.includes('+') && bedrooms < filterBedrooms) {
            return false;
          }
          if (!bedroomsFilter.includes('+') && bedrooms !== filterBedrooms) {
            return false;
          }
        }
        
        // Bathrooms filter
        if (bathroomsFilter && property.attributes?.bathrooms) {
          const bathrooms = parseInt(property.attributes.bathrooms);
          const filterBathrooms = parseInt(bathroomsFilter);
          
          if (bathroomsFilter.includes('+') && bathrooms < filterBathrooms) {
            return false;
          }
          if (!bathroomsFilter.includes('+') && bathrooms !== filterBathrooms) {
            return false;
          }
        }
        
        // Living rooms filter
        if (livingRoomsFilter && property.attributes?.livingRooms) {
          const livingRooms = parseInt(property.attributes.livingRooms);
          const filterLivingRooms = parseInt(livingRoomsFilter);
          
          if (livingRoomsFilter.includes('+') && livingRooms < filterLivingRooms) {
            return false;
          }
          if (!livingRoomsFilter.includes('+') && livingRooms !== filterLivingRooms) {
            return false;
          }
        }
        
        return true;
      });
    }, [arr, locationFilter, typeFilter, priceFilter, bedroomsFilter, bathroomsFilter, livingRoomsFilter]);

    // Reset to first page when filters change
    useEffect(() => {
      setCurrentPage(0);
    }, [locationFilter, typeFilter, priceFilter, bedroomsFilter, bathroomsFilter, livingRoomsFilter]);

    const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);
    const currentCards = filteredProperties.slice(
      currentPage * cardsPerPage,
      currentPage * cardsPerPage + cardsPerPage
    );

  return (
    <>
      <div className='flex flex-col items-center justify-center p-2 md:p-5 space-y-12 md:space-y-16'>
        {/* Filter Section */}
        <div className="w-full px-2 md:px-6">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            {/* Filter Toggle Button */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-teal-800">Filters</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {/* Filter Controls */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  />
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Property Type</label>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  >
                    <option value="">All Types</option>
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Price Range</label>
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  >
                    <option value="">All Prices</option>
                    <option value="under 200000">Under £200,000</option>
                    <option value="under 300000">Under £300,000</option>
                    <option value="under 500000">Under £500,000</option>
                    <option value="over 500000">Over £500,000</option>
                    <option value="over 750000">Over £750,000</option>
                  </select>
                </div>

                {/* Bedrooms Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Bedrooms</label>
                  <select
                    value={bedroomsFilter}
                    onChange={(e) => setBedroomsFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  >
                    <option value="">Any Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                </div>

                {/* Bathrooms Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Bathrooms</label>
                  <select
                    value={bathroomsFilter}
                    onChange={(e) => setBathroomsFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  >
                    <option value="">Any Bathrooms</option>
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="4+">4+ Bathrooms</option>
                  </select>
                </div>

                {/* Living Rooms Filter */}
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Living Rooms</label>
                  <select
                    value={livingRoomsFilter}
                    onChange={(e) => setLivingRoomsFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-500"
                  >
                    <option value="">Any Living Rooms</option>
                    <option value="1">1 Living Room</option>
                    <option value="2">2 Living Rooms</option>
                    <option value="3+">3+ Living Rooms</option>
                  </select>
                </div>
              </div>
            )}

            {/* Active Filters Display */}
            {(locationFilter || typeFilter || priceFilter || bedroomsFilter || bathroomsFilter || livingRoomsFilter) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {locationFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Location: {locationFilter}
                    <button
                      onClick={() => setLocationFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {typeFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Type: {typeFilter}
                    <button
                      onClick={() => setTypeFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {priceFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Price: {priceFilter}
                    <button
                      onClick={() => setPriceFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {bedroomsFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Bedrooms: {bedroomsFilter}
                    <button
                      onClick={() => setBedroomsFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {bathroomsFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Bathrooms: {bathroomsFilter}
                    <button
                      onClick={() => setBathroomsFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {livingRoomsFilter && (
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    Living Rooms: {livingRoomsFilter}
                    <button
                      onClick={() => setLivingRoomsFilter('')}
                      className="ml-2 text-teal-600 hover:text-teal-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setLocationFilter('');
                    setTypeFilter('');
                    setPriceFilter('');
                    setBedroomsFilter('');
                    setBathroomsFilter('');
                    setLivingRoomsFilter('');
                  }}
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover:bg-red-200"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProperties.length} of {arr.length} properties
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // triggers re-animation on page change
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full px-2 md:px-6"
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