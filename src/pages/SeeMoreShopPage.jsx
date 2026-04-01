import React from 'react'
import { useState } from 'react';
import { shops } from '../component/terminalData'; 
import {FaArrowLeft} from "react-icons/fa";

const SeeMoreShopPage = () => {
  // Initialize state with your images array
  const [shopListings, setShopListings] = useState(shops);

  const handleUpdateMain = (shopId, newImage) => {
    setShopListings((prevListings) =>
      prevListings.map((shop) =>
        shop.id === shopId ? { ...shop, image: newImage } : shop
      )
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-20">

      <div className='flex ' onClick={() => window.history.back()} >
         <FaArrowLeft className="text-blue-600 text-2xl mb-6 cursor-pointer gap-4" />
      <p className='hover:text-blue-600 cursor-pointer'>Back </p>
      </div>
   
      <h1 className='text-3xl font-bold text-center mb-10'>Interactive Shop Gallery</h1>

      <div className='max-w-4xl mx-auto flex flex-col gap-16'>
        {shopListings.map((item) => (
          <div key={item.id} className='bg-white p-6 rounded-3xl shadow-lg border border-gray-100'>
            
            {/* 1. Main Display Image (The one that updates) */}
            <div className='w-full h-80 overflow-hidden rounded-2xl mb-6 shadow-inner'>
              <img 
                src={item.image} 
                alt={`Main ${item.id}`} 
                className='w-full h-full object-cover transition-all duration-500' 
              />
            </div>

            {/* 2. Thumbnails (The clickable triggers) */}
            <p className="text-sm font-medium text-gray-500 mb-3">Click to swap main image:</p>
            <div className='flex gap-4 overflow-x-auto pb-2'>
              {item.imageArray.map((thumbSrc, index) => (
                <div 
                  key={index} 
                  onClick={() => handleUpdateMain(item.id, thumbSrc)}
                  className={`w-24 h-24 flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-4 transition-all ${
                    item.image === thumbSrc ? 'border-blue-500 scale-95' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={thumbSrc} 
                    alt="Thumbnail" 
                    className='w-full h-full object-cover' 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeMoreShopPage