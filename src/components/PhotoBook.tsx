import React, { useEffect, useMemo, useState } from 'react'
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
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isMobile, setIsMobile] = useState(false)

  // Track viewport to decide single page (mobile) vs two-page (desktop)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Create pages with pairs of photos (for desktop)
  const pages = useMemo(() => {
    const result: { left: string | null; right: string | null }[] = []
    for (let i = 0; i < photos.length; i += 2) {
      result.push({
        left: photos[i] || null,
        right: photos[i + 1] || null,
      })
    }
    return result
  }, [photos])

  const totalSteps = isMobile ? photos.length : pages.length

  const nextPage = () => {
    if (currentPage < totalSteps - 1) {
      setDirection(1)
      setCurrentPage((p) => p + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage((p) => p - 1)
    }
  }

  const pageVariants = {
    enter: (dir: 1 | -1) => ({
      rotateY: dir === 1 ? 20 : -20,
      x: dir === 1 ? 40 : -40,
      opacity: 0,
    }),
    center: { rotateY: 0, x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({
      rotateY: dir === 1 ? -15 : 15,
      x: dir === 1 ? -40 : 40,
      opacity: 0,
    }),
  }

  return (
    <section className="section-padding bg-vintage-white relative overflow-visible">
      <div className="container-max">
        <div className="flex justify-center items-center min-h-[560px] py-16 mb-24">

          {/* Book Container */}
          <div className="relative perspective-1000 w-full flex items-center justify-center min-h-[520px]">

            {/* Closed Book Cover */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  initial={{ rotateY: 0 }}
                  exit={{ rotateY: -15, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Cover */}
                  <div className="w-80 sm:w-96 h-[440px] sm:h-[500px] bg-gradient-to-br from-vintage-charcoal via-vintage-grey to-vintage-dark-grey shadow-2xl relative border-r-8 border-vintage-gold/30">
                    {/* Cover Decorations */}
                    <div className="absolute inset-4 border-2 border-vintage-gold/50"></div>
                    <div className="absolute inset-8 border border-vintage-gold/30"></div>

                    {/* Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <motion.h2
                        className="font-script text-3xl sm:text-4xl text-vintage-white mb-4 tracking-wide"
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
                        Tap to Open
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
                  initial={{ scale: 1.02, rotateY: -6, opacity: 0 }}
                  animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Book Base */}
                  <div className="flex shadow-2xl flex-col md:flex-row bg-vintage-white">
                    {isMobile ? (
                      // Mobile: single page view
                      <AnimatePresence custom={direction} initial={false} mode="wait">
                        <motion.div
                          key={`mobile-${currentPage}`}
                          custom={direction}
                          variants={pageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          className="w-full h-[480px] sm:h-[520px] bg-vintage-grey border border-vintage-grey/20 relative overflow-hidden"
                        >
                          <div className="p-3 sm:p-4 h-full flex flex-col">
                            <div className="flex-1 relative">
                              <img
                                src={photos[currentPage]}
                                alt="Wedding Photo"
                                className="w-full h-full object-contain sm:object-cover shadow-lg"
                              />
                            </div>
                            <div className="mt-2 text-center">
                              <div className="w-12 h-px bg-vintage-gold mx-auto mb-1"></div>
                              <p className="text-vintage-grey font-serif text-xs sm:text-sm">
                                Photo {currentPage + 1} of {photos.length}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      // Desktop: two-page spread
                      <>
                        {/* Left Page */}
                        <AnimatePresence custom={direction} initial={false}>
                          <motion.div
                            className="w-full md:w-96 h-[300px] md:h-[500px] bg-vintage-grey border border-vintage-grey/20 relative overflow-hidden"
                            key={`left-${currentPage}`}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {pages[currentPage]?.left && (
                              <div className="p-6 h-full flex flex-col">
                                <div className="flex-1 relative">
                                  <img
                                    src={pages[currentPage].left as string}
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
                        </AnimatePresence>

                        {/* Book Spine */}
                        <div className="w-full h-3 md:w-4 md:h-auto bg-gradient-to-b from-vintage-grey to-vintage-dark-grey shadow-inner"></div>

                        {/* Right Page */}
                        <AnimatePresence custom={direction} initial={false}>
                          <motion.div
                            className="w-full md:w-96 h-[300px] md:h-[500px] bg-vintage-grey border border-vintage-grey/20 relative overflow-hidden"
                            key={`right-${currentPage}`}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          >
                            {pages[currentPage]?.right && (
                              <div className="p-6 h-full flex flex-col">
                                <div className="flex-1 relative">
                                  <img
                                    src={pages[currentPage].right as string}
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
                        </AnimatePresence>
                      </>
                    )}
                  </div>

                  {/* Navigation Controls */}
                  <div className="sticky bottom-4 left-0 right-0 mx-auto mt-6 w-full max-w-md md:max-w-none md:w-auto md:static md:mt-8 flex items-center justify-center gap-4 px-2">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0}
                      className="px-4 sm:px-6 py-2 rounded-full bg-vintage-charcoal text-vintage-white font-serif disabled:opacity-40 disabled:cursor-not-allowed hover:bg-vintage-grey transition-colors duration-300 shadow"
                    >
                      ← Prev
                    </button>

                    <span className="text-vintage-grey font-serif text-sm md:text-base">
                      {currentPage + 1} of {totalSteps}
                    </span>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalSteps - 1}
                      className="px-4 sm:px-6 py-2 rounded-full bg-vintage-charcoal text-vintage-white font-serif disabled:opacity-40 disabled:cursor-not-allowed hover:bg-vintage-grey transition-colors duration-300 shadow"
                    >
                      Next →
                    </button>
                  </div>

                  {/* Close Book Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-12 right-0 px-4 py-2 bg-vintage-grey text-vintage-white font-serif text-sm hover:bg-vintage-charcoal transition-colors duration-300 rounded"
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
