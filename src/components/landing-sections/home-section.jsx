import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HomeSwiper from "../swipers/home-swiper";

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
    words: inView ? ["BC Swap"] : [""],
    loop: false,
    typeSpeed: 100,
  });

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

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 2.3 },
    },
  };

  return (
    <Element name="home" className="h-full">
      <section
        ref={ref}
        className="relative z-10 w-full pt-12 sm:py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color overflow-hidden"
      >
        <AnimatePresence>
          {inView && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
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
                <HomeSwiper />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
};

export default HomeSection;
