import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";

// --- Re-usable Matrix Animation Components (Upgraded) ---

const matrixChars = "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポヴッン0123456789";

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
        setCurrentChar(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView, targetChar, index]);

  return currentChar;
};

const MatrixCharacter = ({ char, inView, index }) => {
  const displayedChar = useMatrixAnimation(char, inView, index);
  return <span>{displayedChar}</span>;
};

// --- UPGRADED MatrixText Component that accepts JSX children ---
const MatrixText = ({ children, inView, className }) => {
  let charIndex = 0;

  const renderAnimatedChildren = (nodes) => {
    return React.Children.map(nodes, (node) => {
      if (typeof node === "string") {
        return node.split(" ").map((word, wordIndex, wordsArr) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char) => (
              <MatrixCharacter
                key={charIndex}
                char={char}
                inView={inView}
                index={charIndex++}
              />
            ))}
            {wordIndex < wordsArr.length - 1 && <span> </span>}
          </span>
        ));
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(
          node,
          {},
          renderAnimatedChildren(node.props.children)
        );
      }
      return node;
    });
  };

  return <div className={className}>{renderAnimatedChildren(children)}</div>;
};


// --- Main ExplorerSection Component ---

const ExplorerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const getImageSrc = () => {
    if (!mounted) return "/images/bchscan_light.png";
    if (theme === "dark") return "/images/bchscan_dark.png";
    if (theme === "dim") return "/images/bchscan_dim.png";
    return "/images/bchscan_light.png";
  };

  const textContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 1.2, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 2.2 },
    },
  };

  return (
    <Element name="explorer" className="h-full">
      <section
        ref={ref}
        className="w-full py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center text-dispute-color">
          {/* Text Content */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full lg:w-6/12"
          >
            <MatrixText
              inView={inView}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              BCHScan Explorer
            </MatrixText>
            <MatrixText
              inView={inView}
              className="text-base xl:text-lg mb-4"
            >
              Dive deep into your activity on <strong>BC Swap</strong> with{" "}
              <strong>BCHScan.io</strong>. Whether you're swapping, sending, or
              receiving, BCHScan provides full transparency of your transactions
              on the blockchain.
            </MatrixText>
            <MatrixText
              inView={inView}
              className="text-base xl:text-lg mb-4"
            >
              Explore all <strong>BC Swap</strong> transactions, view detailed{" "}
              <strong>blocks</strong>, track <strong>token movements</strong>,
              analyze <strong>smart contract interactions</strong>, and monitor{" "}
              <strong>wallet activities</strong> — all in real time.
            </MatrixText>
            <MatrixText
              inView={inView}
              className="text-base xl:text-lg mb-6"
            >
              BCHScan is your gateway to understanding everything happening
              on-chain through BC Swap.
            </MatrixText>

            <motion.a
              href="https://bchscan.io"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-full text-white font-medium bg-black hover:bg-opacity-90 transition"
            >
              Visit BCHScan
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center w-full lg:w-6/12"
            style={{ perspective: 1000 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={getImageSrc()}
                src={getImageSrc()}
                alt="BCHScan Preview"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="rounded-xl shadow-md xl:max-w-xl border border-custom-border"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default ExplorerSection;