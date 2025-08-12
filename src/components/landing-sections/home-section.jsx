import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Play, X } from "lucide-react";
import logoicon from '../../../public/images/logo-icon.png';
import flagimg from '../../../public/images/india-national-flag.png';

const matrixChars =
  "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789";

const useMatrixAnimation = (targetChar, inView, index) => {
  const [currentChar, setCurrentChar] = useState("");

  useEffect(() => {
    if (inView) {
      let iteration = 0;
      const scrambleDuration = index * 14 + 500;
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime >= scrambleDuration) {
          setCurrentChar(targetChar);
          clearInterval(interval);
          return;
        }
        setCurrentChar(
          matrixChars[Math.floor(Math.random() * matrixChars.length)]
        );
        iteration += 1 / 3;
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, targetChar, index]);

  return currentChar;
};

const MatrixCharacter = ({ char, inView, index }) => {
  const displayedChar = useMatrixAnimation(char, inView, index);
  const isSpecialChar = !/[a-zA-Z0-9]/.test(char);

  return (
    <motion.span
      style={{
        color: "currentColor",
        opacity: isSpecialChar ? 0.5 : 1,
      }}
    >
      {displayedChar}
    </motion.span>
  );
};

const MatrixText = ({ text, inView }) => {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <p className="lg:text-xl 2xl:text-2xl text-dispute-color mb-8 text-center sm:text-left">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char) => (
            <MatrixCharacter
              key={charIndex}
              char={char}
              inView={inView}
              index={charIndex++}
            />
          ))}
        </span>
      ))}
    </p>
  );
};

const HomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [text] = useTypewriter({
    words: inView ? ["BC Cash"] : [""],
    loop: false,
    typeSpeed: 100,
  });

  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  const paragraphText =
    "Bridge, Send, Receive, and Swap Tokens Effortlessly. BC Swap is your go-to crypto companion for seamless, secure, and fast cross-chain operations.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2 },
    },
  };

  const logoAnimationVariants = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 2.3 },
    },
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const openVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };

  return (
    <>
      <Element name="home" className="h-full">
        <section
          ref={ref}
          className="relative z-10 w-full pt-12 sm:py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color overflow-hidden"
        >
          <img src={flagimg} alt="" className="absolute w-full h-full" />
          <AnimatePresence>
            {inView && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="reletive z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
              >
                <motion.div
                  variants={leftContainerVariants}
                  className="flex-1 text-dispute-color w-full lg:w-8/12"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center sm:text-left">
                    <span>{text}</span>
                    <Cursor cursorStyle="_" />
                  </h1>

                  <MatrixText text={paragraphText} inView={inView} />

                  <motion.div
                    variants={buttonContainerVariants}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white"
                  >
                    <motion.a
                      href="/bcswap-latest.apk"
                      download
                      className="flex justify-center gap-4 items-center bg-black rounded-lg hover:bg-opacity-85 w-full sm:w-48 p-2 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>
                        <img
                          src="/images/apple.png"
                          className="w-8 h-8"
                          alt="App Store"
                        />
                      </span>
                      <span className="flex flex-col items-start">
                        <h1 className="text-sm">Download on the</h1>
                        <p className="text-xl -mt-1.5">App Store</p>
                      </span>
                    </motion.a>
                    <motion.button
                      onClick={() => window.open("https://play.google.com/store/apps/details?id=com.pnsoftware.uniswap&hl=en", "_blank")}
                      className="flex justify-center gap-4 items-center bg-black rounded-lg hover:bg-opacity-85 w-full sm:w-48 p-2 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>
                        <img
                          src="/images/google-play.png"
                          className="w-8 h-8"
                          alt="Google Play"
                        />
                      </span>
                      <span className="flex flex-col items-start">
                        <h1 className="text-sm">GET IT ON</h1>
                        <p className="text-xl -mt-1.5 font-semibold">
                          Google Play
                        </p>
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="flex justify-center items-center w-full lg:w-6/12"
                >
                  <motion.div
                    className="relative cursor-pointer group"
                    variants={logoAnimationVariants}
                    animate="animate"
                    onClick={openVideoPopup}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Logo as background */}
                    <img
                      src={logoicon}
                      alt="BC Cash Logo"
                      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                    />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-60 rounded-full p-6 group-hover:bg-opacity-80 transition-all duration-300">
                        <Play size={48} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Pulsing ring animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-4 border-white rounded-full opacity-30 animate-ping"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </Element>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isVideoPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoPopup}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoPopup}
                className="absolute -top-12 right-0 z-10 bg-white bg-opacity-20 text-white rounded-full p-3 hover:bg-opacity-30 transition-all backdrop-blur-sm"
              >
                <X size={24} />
              </button>
              
              {/* Video Container with rounded corners and shadow */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/"
                  title="BC Cash Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeSection;