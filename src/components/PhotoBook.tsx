import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PhotoBookProps {
  photos?: string[]
}

const PhotoBook: React.FC<PhotoBookProps> = ({ 
  photos = [
    '/images/NayrimAndSteven.jpg',
    '/images/N&S-44.jpg', 
    '/images/N&S-57.jpg',
    // Add more photos here as needed
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  // Create pages with pairs of photos
  const pages = []
  for (let i = 0; i < photos.length; i += 2) {
    pages.push({
      left: photos[i],
      right: photos[i + 1] || null
    })
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section className="section-padding bg-vintage-white relative overflow-hidden">
      <div className="container-max">
        <div className="flex justify-center items-center min-h-[50vh] py-16 mb-16">
          
          {/* Book Container */}
          <div className="relative perspective-1000">
            
            {/* Closed Book Cover */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ rotateY: 0 }}
                  exit={{ rotateY: -15, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Cover */}
                  <div className="w-96 h-[500px] bg-gradient-to-br from-vintage-charcoal via-vintage-grey to-vintage-dark-grey shadow-2xl relative border-r-8 border-vintage-gold/30">
                    {/* Cover Decorations */}
                    <div className="absolute inset-4 border-2 border-vintage-gold/50"></div>
                    <div className="absolute inset-8 border border-vintage-gold/30"></div>
                    
                    {/* Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <motion.h2 
                        className="font-script text-4xl text-vintage-white mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        Wedding Photos
                      </motion.h2>
                      
                      <motion.div
                        className="w-24 h-px bg-vintage-gold mb-4"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      ></motion.div>
                      
                      <motion.p 
                        className="text-vintage-white/80 font-serif italic text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Steven & Nayrim
                      </motion.p>
                      
                      <motion.p 
                        className="text-vintage-white/60 font-serif text-sm mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        Click to Open
                      </motion.p>
                    </div>

                    {/* Book Spine Shadow */}
                    <div className="absolute right-0 top-0 w-2 h-full bg-black/30"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Open Book Pages */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ scale: 1.1, rotateY: -15, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Base */}
                  <div className="flex shadow-2xl flex-col md:flex-row">
                    
                    {/* Left Page */}
                    <motion.div 
                      className="w-full md:w-96 h-[300px] md:h-[500px] bg-vintage-grey border border-vintage-grey/20 relative overflow-hidden"
                      key={`left-${currentPage}`}
                      initial={{ rotateY: -5 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {pages[currentPage]?.left && (
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex-1 relative">
                            <img 
                              src={pages[currentPage].left}
                              alt="Wedding Photo"
                              className="w-full h-full object-cover shadow-lg"
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <div className="w-16 h-px bg-vintage-gold mx-auto mb-2"></div>
                            <p className="text-vintage-grey font-serif text-sm">
                              Page {currentPage * 2 + 1}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Book Spine */}
                    <div className="w-4 h-4 md:w-4 md:h-auto bg-gradient-to-b from-vintage-grey to-vintage-dark-grey shadow-inner"></div>

                    {/* Right Page */}
                    <motion.div 
                      className="w-full md:w-96 h-[300px] md:h-[500px] bg-vintage-grey border border-vintage-grey/20 relative overflow-hidden"
                      key={`right-${currentPage}`}
                      initial={{ rotateY: 5 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {pages[currentPage]?.right && (
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex-1 relative">
                            <img 
                              src={pages[currentPage].right}
                              alt="Wedding Photo"
                              className="w-full h-full object-cover shadow-lg"
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <div className="w-16 h-px bg-vintage-gold mx-auto mb-2"></div>
                            <p className="text-vintage-grey font-serif text-sm">
                              Page {currentPage * 2 + 2}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className="px-6 py-2 bg-vintage-charcoal text-vintage-white font-serif disabled:opacity-50 disabled:cursor-not-allowed hover:bg-vintage-grey transition-colors duration-300"
                    >
                      ← Previous
                    </button>
                    
                    <span className="text-vintage-grey font-serif">
                      {currentPage + 1} of {pages.length}
                    </span>
                    
                    <button
                      onClick={nextPage}
                      disabled={currentPage === pages.length - 1}
                      className="px-6 py-2 bg-vintage-charcoal text-vintage-white font-serif disabled:opacity-50 disabled:cursor-not-allowed hover:bg-vintage-grey transition-colors duration-300"
                    >
                      Next →
                    </button>
                  </div>

                  {/* Close Book Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-12 right-0 px-4 py-2 bg-vintage-grey text-vintage-white font-serif text-sm hover:bg-vintage-charcoal transition-colors duration-300"
                  >
                    Close Book
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PhotoBook
