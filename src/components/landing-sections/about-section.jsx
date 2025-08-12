import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoicon from '../../../public/images/logo-icon.png';

// --- Re-usable Matrix Animation Components ---

const matrixChars =
  "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789";

const useMatrixAnimation = (targetChar, inView, index) => {
  const [currentChar, setCurrentChar] = useState("");

  useEffect(() => {
    if (inView) {
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
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView, targetChar, index]);

  return currentChar;
};

const MatrixCharacter = ({ char, inView, index }) => {
  const displayedChar = useMatrixAnimation(char, inView, index);
  return (
    <span
      style={{
        color: "currentColor",
        opacity: !/[a-zA-Z0-9]/.test(char) ? 0.5 : 1,
      }}
    >
      {displayedChar}
    </span>
  );
};

const MatrixText = ({ text, inView, className }) => {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <div className={className}>
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
    </div>
  );
};

// --- Main AboutSection Component ---

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 30 },
    visible: {
      opacity: 1,
      x: 0,
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

  const textContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 2.0 }, // Delay for Matrix text to finish
    },
  };

  return (
    <Element name="about" className="h-full">
      <section
        ref={ref}
        className="w-full py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color overflow-hidden"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-dispute-color">
          {/* Left: Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center items-center w-full lg:w-6/12"
          >
            <motion.img
              src={logoicon}
              alt="BC Cash Logo"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              variants={logoAnimationVariants}
              animate="animate"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-1"
          >
            <MatrixText
              text="About BC Cash"
              inView={inView}
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <MatrixText
              text="It is with immense pride and optimism that I present to you BC CASH Litepaper v1.0 — not merely a technical document, but a clear declaration of our shared ambition to redefine the future of our Blockchain First Meme Coin."
              inView={inView}
              className="text-lg text-dispute-color mb-4 leading-relaxed"
            />
            <MatrixText
              text="Let’s work together to create bridges between legacy finance and decentralized futures.Remember — “Big Dream with Bright Future” is not just a slogan. It is our mission, our motivation, and our roadmap."
              inView={inView}
              className="text-lg text-dispute-color leading-relaxed"
            />

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-opacity-85 transition"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;