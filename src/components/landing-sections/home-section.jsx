import React, { useState, useEffect, useCallback } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Play, X } from "lucide-react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import logoicon from '../../../public/images/logo-icon.png';
import flagimg from "../../../public/images/home-india-flag.png";

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

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#FF6B35", "#32CD32", "#228B22"] },
      links: {
        color: "#FF6B35",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <>
      <Element name="home" className="h-full">
        <section
          ref={ref}
          className="relative w-full pt-12 sm:py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-black overflow-hidden"
          style={{ 
            position: 'relative', 
            isolation: 'isolate',
            zIndex: 1
          }}
        >
          {/* Particles Background - Now properly contained */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
              contain: 'layout style paint'
            }}
          >
            <div style={{ 
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}>
              <Particles
                id="tsparticles-home"
                init={particlesInit}
                options={{
                  ...particlesConfig,
                  fullScreen: { enable: false },
                  background: { color: { value: "transparent" } }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
            </div>
          </div>

          <AnimatePresence>
            {inView && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
              >
                <motion.div
                  variants={leftContainerVariants}
                  className="flex-1 text-black w-full lg:w-8/12"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dispute-color font-extrabold mb-6 text-center sm:text-left">
                    <span>{text}</span>
                    <Cursor cursorStyle="_" />
                  </h1>

                  <div className="relative mb-[6.5rem] text-center sm:text-left">
                    <h2 className="lg:text-4xl 2xl:text-5xl font-bold">
                      <span 
                        style={{
                          background: 'linear-gradient(180deg, #FF6B35 0%, #FF6B35 30%, #ffffffff 55%, #32CD32 80%, #228B22 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        India ka{' '}
                      </span>
                      <span className="text-dispute-color">Meme Coin</span>
                    </h2>
                    <img src={flagimg} alt="" className="absolute w-full" />
                  </div>

                  <motion.div
                    variants={buttonContainerVariants}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-white"
                  >
                    <motion.a
                      href="/bcswap-latest.apk"
                      download
                      className="flex justify-center items-center bg-black rounded-lg hover:bg-opacity-85 w-full sm:w-48 p-2 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex flex-col items-start">
                        <h1 className="text-xl font-semibold">Download</h1>
                      </span>
                    </motion.a>
                    <motion.button
                      onClick={() => window.open("https://play.google.com/store/apps/details?id=com.pnsoftware.uniswap&hl=en", "_blank")}
                      className="flex justify-center gap-4 items-center bg-black rounded-lg hover:bg-opacity-85 w-full sm:w-48 p-2 py-4 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex flex-col items-start">
                        <h1 className="text-xl font-semibold">Get Start Now</h1>
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
                    onClick={() => setIsVideoPopupOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={logoicon}
                      alt="BC Cash Logo"
                      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-60 rounded-full p-6 group-hover:bg-opacity-80 transition-all duration-300">
                        <Play size={48} className="text-white fill-white ml-1" />
                      </div>
                    </div>
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
            onClick={() => setIsVideoPopupOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPopupOpen(false)}
                className="absolute -top-12 right-0 z-10 bg-white bg-opacity-20 text-white rounded-full p-3 hover:bg-opacity-30 transition-all backdrop-blur-sm"
              >
                <X size={24} />
              </button>
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