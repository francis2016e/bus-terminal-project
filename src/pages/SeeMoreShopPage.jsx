import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { shops } from '../component/terminalData'; 
import { 
  FaArrowLeft, 
  FaTimes, 
  FaMapMarkerAlt, 
  FaRegClock, 
  FaShieldAlt, 
  FaBolt, 
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";

const SeeMoreShopPage = () => {
  const [shopListings, setShopListings] = useState(shops);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleUpdateMain = (shopId, newImage) => {
    setShopListings((prevListings) =>
      prevListings.map((shop) =>
        shop.id === shopId ? { ...shop, image: newImage } : shop
      )
    );
  };

  return (
    <div className={`bg-slate-50 min-h-screen pb-20 ${fullscreenImage ? 'overflow-hidden' : ''}`}>
      
      {/* --- Fullscreen Lightbox --- */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setFullscreenImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition-colors">
              <FaTimes />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={fullscreenImage} 
              alt="Fullscreen" 
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 mb-12">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className='flex items-center text-slate-600 hover:text-blue-600 cursor-pointer group transition-all' 
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="mr-3 transition-transform group-hover:-translate-x-1" />
            <span className='font-bold uppercase tracking-widest text-sm'>Return to Listings</span>
          </div>
          <h1 className='text-xl font-black text-slate-900'>Property <span className="text-blue-600">Details</span></h1>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 flex flex-col gap-24'>
        {shopListings.map((item) => (
          <div key={item.id} className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: Image Gallery (Span 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div 
                className='relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200 cursor-zoom-in group'
                onClick={() => setFullscreenImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <p className="text-white font-medium flex items-center gap-2">
                     <FaUsers /> High Resolution View
                   </p>
                </div>
              </div>

              {/* Thumbnails Swiper */}
              <div className='flex gap-3 overflow-x-auto pb-4 no-scrollbar'>
                {item.imageArray.map((thumbSrc, index) => (
                  <button 
                    key={index} 
                    onClick={() => handleUpdateMain(item.id, thumbSrc)}
                    className={`relative min-w-[100px] h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                      item.image === thumbSrc 
                      ? 'ring-4 ring-blue-600 scale-95 shadow-lg' 
                      : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumbSrc} alt="Thumb" className='w-full h-full object-cover' />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Detailed Info (Span 5) */}
            <div className="lg:col-span-5 flex flex-col pt-4">
              <div className="mb-8">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                  Prime Location
                </span>
                <h2 className='text-4xl font-black text-slate-900 mt-4 leading-tight'>{item.name}</h2>
                <div className='flex items-center text-slate-500 mt-2 text-lg'>
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {item.location}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <FaBolt className="text-amber-400 mb-2 text-xl" />
                  <p className="text-xs text-slate-400 font-bold uppercase">Utilities</p>
                  <p className="text-sm font-semibold text-slate-700">Backup Power</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <FaShieldAlt className="text-blue-500 mb-2 text-xl" />
                  <p className="text-xs text-slate-400 font-bold uppercase">Security</p>
                  <p className="text-sm font-semibold text-slate-700">24/7 Patrol</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <FaRegClock className="text-purple-500 mb-2 text-xl" />
                  <p className="text-xs text-slate-400 font-bold uppercase">Access</p>
                  <p className="text-sm font-semibold text-slate-700">Extended Hours</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <FaCalendarAlt className="text-emerald-500 mb-2 text-xl" />
                  <p className="text-xs text-slate-400 font-bold uppercase">Lease</p>
                  <p className="text-sm font-semibold text-slate-700">Flexible Terms</p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className='bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-blue-100'>
                <div>
                  <p className='text-blue-400 text-xs font-bold uppercase tracking-widest mb-1'>Monthly Rental</p>
                  <p className='text-4xl font-black'>{item.price}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/40">
                  Book Viewing
                </button>
              </div>
              
              <p className="mt-6 text-slate-400 text-xs text-center">
                * Prices exclude maintenance and utility service charges.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeMoreShopPage;