import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Calendar, Zap } from "lucide-react";

const roadmapData = [
  {
    month: "June 2025",
    title: "Planning for Startup",
    description: "Strategic planning and team formation",
    icon: <Calendar className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "July 2025",
    title: "Research & Development",
    description: "Core technology development phase",
    icon: <Zap className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "August 2025",
    title: "Start Pre-Selling",
    description: "Initial product pre-sales launch",
    icon: <Calendar className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "November 2026",
    title: "Listing in NS Exchange",
    description: "First major exchange listing",
    icon: <Zap className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "January 2027",
    title: "Listing in BC SX",
    description: "Secondary exchange integration",
    icon: <Calendar className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "March 2027",
    title: "Global Expansion",
    description: "International market penetration",
    icon: <Zap className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "June 2027",
    title: "Advanced Features",
    description: "Enhanced platform capabilities",
    icon: <Calendar className="w-5 h-5" />,
    status: "upcoming"
  },
  {
    month: "September 2027",
    title: "Partnership Launch",
    description: "Strategic partnership initiatives",
    icon: <Zap className="w-5 h-5" />,
    status: "upcoming"
  },
];

const RoadmapSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 640) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      const newItemsToShow = getItemsPerPage();
      setItemsToShow(newItemsToShow);
      // Reset currentIndex if it's beyond the new maximum
      const maxIndex = Math.max(0, roadmapData.length - newItemsToShow);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const maxIndex = Math.max(0, roadmapData.length - itemsToShow);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const goToSlide = (slideIndex) => {
    const targetIndex = Math.min(slideIndex, maxIndex);
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      filter: "blur(10px)"
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Element name="roadmap" className="h-full">
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-dispute-color">
              Roadmap
            </h2>
            <p className="text-dispute-color text-base sm:text-lg max-w-2xl mx-auto px-4">
              Our strategic timeline for building the future of decentralized finance
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Navigation Container */}
            <div className="flex items-center justify-center w-full mb-6 sm:mb-8">
              {/* Left Arrow */}
              <motion.button
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`group p-3 sm:p-4 bg-card border border-custom-border rounded-full mr-2 sm:mr-4 md:mr-6 btn-transition ${
                  currentIndex === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'opacity-100 hover:bg-sub-card hover:border-accent cursor-pointer'
                }`}
                style={{
                  boxShadow: currentIndex === 0 ? 'none' : '0 4px 15px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  if (currentIndex !== 0) e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  if (currentIndex !== 0) e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.2)';
                }}
              >
                <ChevronLeft size={20} className={`sm:w-6 sm:h-6 text-dispute-color group-hover:text-accent transition-colors ${
                  currentIndex === 0 ? 'text-dispute-color' : ''
                }`} />
              </motion.button>

              {/* Roadmap Cards Container */}
              <div className="flex-1 mx-2 sm:mx-4 overflow-hidden rounded-xl sm:rounded-2xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${currentIndex}-${itemsToShow}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      filter: { duration: 0.3 }
                    }}
                    className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(itemsToShow, roadmapData.slice(currentIndex, currentIndex + itemsToShow).length)}, minmax(0, 1fr))`
                    }}
                  >
                    {roadmapData.slice(currentIndex, currentIndex + itemsToShow).map((item, idx) => (
                      <motion.div
                        key={`${currentIndex + idx}-${item.month}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          y: -4,
                        }}
                        className="group relative bg-card border border-custom-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer btn-transition overflow-hidden"
                        style={{
                          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 12px 40px rgba(59, 130, 246, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.2)';
                        }}
                      >
                        {/* Background Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-teal opacity-0 group-hover:opacity-10 btn-transition rounded-2xl" />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Icon and Status */}
                          <div className="flex items-center justify-between mb-4">
                            <motion.div
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              className="p-2 bg-sub-card rounded-full border border-custom-border group-hover:border-accent btn-transition"
                            >
                              <div className="text-accent">
                                {item.icon}
                              </div>
                            </motion.div>
                            <div className="w-2 h-2 rounded-full bg-accent shadow-glow"></div>
                          </div>

                          {/* Month */}
                          <h3 className="text-dispute-color text-base sm:text-lg font-bold mb-2 group-hover:text-accent btn-transition">
                            {item.month}
                          </h3>

                          {/* Title */}
                          <h4 className="text-dispute-color text-sm font-semibold mb-2 sm:mb-3 leading-tight">
                            {item.title}
                          </h4>

                          {/* Description */}
                          <p className="text-dispute-color text-xs leading-relaxed opacity-80 group-hover:opacity-100 btn-transition">
                            {item.description}
                          </p>

                          {/* Bottom Border Accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-teal opacity-0 group-hover:opacity-100 btn-transition rounded-b-2xl"></div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <motion.button
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`group p-3 sm:p-4 bg-card border border-custom-border rounded-full ml-2 sm:ml-4 md:ml-6 btn-transition ${
                  currentIndex >= maxIndex 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'opacity-100 hover:bg-sub-card hover:border-accent cursor-pointer'
                }`}
                style={{
                  boxShadow: currentIndex >= maxIndex ? 'none' : '0 4px 15px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  if (currentIndex < maxIndex) e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  if (currentIndex < maxIndex) e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.2)';
                }}
              >
                <ChevronRight size={20} className={`sm:w-6 sm:h-6 text-dispute-color group-hover:text-accent transition-colors ${
                  currentIndex >= maxIndex ? 'text-dispute-color' : ''
                }`} />
              </motion.button>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 space-x-2 sm:space-x-3">
              {Array.from({ length: Math.ceil(roadmapData.length / itemsToShow) }).map((_, index) => {
                const isActive = Math.floor(currentIndex / itemsToShow) === index;
                return (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index * itemsToShow)}
                    className={`relative btn-transition ${
                      isActive 
                        ? 'w-8 h-3 bg-accent shadow-glow rounded-full' 
                        : 'w-3 h-3 bg-sub-card border border-custom-border hover:border-accent rounded-full'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-accent rounded-full shadow-glow"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Timeline Visualization */}
            <div className="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 md:px-8">
              <div className="relative">
                {/* Background Timeline */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-custom-border rounded-full transform -translate-y-1/2" />
                
                {/* Progress Timeline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: maxIndex > 0 ? `${(currentIndex / maxIndex) * 100}%` : '0%' 
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute top-1/2 left-0 h-0.5 bg-gradient-teal rounded-full transform -translate-y-1/2 shadow-glow"
                />
                
                {/* Timeline Markers */}
                <div className="flex justify-between items-center relative">
                  {roadmapData.map((item, index) => {
                    const isVisible = index >= currentIndex && index < currentIndex + itemsToShow;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          const slideIndex = Math.floor(index / itemsToShow) * itemsToShow;
                          goToSlide(slideIndex);
                        }}
                        className={`w-3 h-3 rounded-full border-2 cursor-pointer btn-transition ${
                          isVisible
                            ? 'bg-accent border-accent shadow-glow scale-125'
                            : 'bg-sub-card border-custom-border hover:border-accent'
                        }`}
                        title={`${item.month}: ${item.title}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default RoadmapSection;