import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";

// --- Re-usable Matrix Animation Components (Upgraded) ---
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
  return <span>{displayedChar}</span>;
};

// --- UPGRADED MatrixText Component with stable keys ---
const MatrixText = ({ children, inView, className }) => {
  let charCounter = 0; // Stable per render

  const renderAnimatedChildren = (nodes) => {
    return React.Children.map(nodes, (node) => {
      if (typeof node === "string") {
        return node.split(/(\s+)/).map((segment, segIndex) => {
          if (segment.trim() === "") {
            return <span key={`space-${charCounter++}`}>{segment}</span>;
          }
          return (
            <span key={`word-${segIndex}`} className="inline-block">
              {segment.split("").map((char) => (
                <MatrixCharacter
                  key={`char-${charCounter}`}
                  char={char}
                  inView={inView}
                  index={charCounter++}
                />
              ))}
            </span>
          );
        });
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(
          node,
          { key: `node-${charCounter++}` },
          renderAnimatedChildren(node.props.children)
        );
      }
      return node;
    });
  };

  return <div className={className}>{renderAnimatedChildren(children)}</div>;
};

// --- Rewards Table Data ---
const rewardsData = [
  {
    level: 3,
    joining: 800,
    reward: "0.80%",
    allocation: "Refrigerator (Double-Door)",
  },
  {
    level: 5,
    joining: 12000,
    reward: "0.60%",
    allocation:
      "3.5L Down-payment for 4-wheeler & 10K Gift Voucher",
  },
  {
    level: 8,
    joining: 96000,
    reward: "0.50%",
    allocation:
      "20L Down-payment for 4- Wheeler & 4L Gift Voucher",
  },
  {
    level: 10,
    joining: 384000,
    reward: "0.25%",
    allocation:
      "35L Down-Payment of a Flat & 10L Car & 3.5L Gift Voucher",
  },
  {
    level: 12,
    joining: 1152000,
    reward: "0.35%",
    allocation:
      "60L Flat Down-Payment & 30L car Down-Payment & 20L Gold Crown & 10L Gift Voucher & Pension Scheme for rest 14 years (50K/Month)",
  },
];

// --- Main ExplorerSection Component ---
const ExplorerSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const getThemeClasses = () => {
    if (!mounted) return "light";
    return theme || "light";
  };

  const currentTheme = getThemeClasses();

  const textContainerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const tableContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 1.2,
        delay: 0.2,
      },
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

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Element name="explorer" className="h-full">
      <section
        ref={ref}
        className="w-full py-16 sm:px-8 xl:px-24 min-h-screen flex flex-col items-center justify-center text-dispute-color"
      >
        {/* Text Content */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full max-w-4xl text-center mb-12"
        >
          <MatrixText
            inView={inView}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
          >
            BCHScan Explorer
          </MatrixText>
          <MatrixText
            inView={inView}
            className="text-lg md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto"
          >
            Dive deep into your activity on <strong>BC Swap</strong> with{" "}
            <strong>BCHScan.io</strong>. Full transparency of your blockchain
            transactions with real-time monitoring.
          </MatrixText>
        </motion.div>

        {/* Rewards Table */}
        <motion.div
          variants={tableContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full max-w-6xl"
        >
          <div
            className={`rounded-xl shadow-lg overflow-hidden ${
              currentTheme === "light"
                ? "bg-card border-custom-border"
                : currentTheme === "dark"
                ? "bg-card-dark border-custom-border-dark"
                : "bg-card-dim border-custom-border-dim"
            } border`}
          >
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-center">
                <thead>
                  <tr
                    className={`${ 
                      currentTheme === "light"
                        ? "bg-sub-card"
                        : currentTheme === "dark"
                        ? "bg-sub-card-dark"
                        : "bg-sub-card-dim"
                    }`}
                  >
                    {["Level", "Joining", "Reward%", "Allocation"].map(
                      (header) => (
                        <th
                          key={header}
                          className={`px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider ${
                            currentTheme === "light"
                              ? "text-dispute-color border-custom-border"
                              : "text-text-color border-custom-border-dark"
                          } border-b`}
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-custom-border">
                  {rewardsData.map((row, index) => (
                    <motion.tr
                      key={row.level}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`${
                        currentTheme === "light"
                          ? "hover:bg-sub-card"
                          : currentTheme === "dark"
                          ? "hover:bg-sub-card-dark"
                          : "hover:bg-sub-card-dim"
                      } transition-all duration-200 cursor-pointer group`}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          currentTheme === "light"
                            ? "text-dispute-color"
                            : "text-text-color"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {row.level}
                          </div>
                          <span className="text-sm">Lv {row.level}</span>
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          currentTheme === "light"
                            ? "text-dispute-color"
                            : "text-text-color"
                        }`}
                      >
                        <div className="font-mono text-sm font-semibold">
                          {formatNumber(row.joining)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {row.reward}
                        </span>
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${
                          currentTheme === "light"
                            ? "text-dispute-color"
                            : "text-text-color"
                        }`}
                      >
                        <div className="leading-relaxed text-sm">
                          {row.allocation}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                  <motion.tr
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.0 }}
                    className={`${
                      currentTheme === "light"
                        ? "bg-sub-card border-custom-border"
                        : currentTheme === "dark"
                        ? "bg-sub-card-dark border-custom-border-dark"
                        : "bg-sub-card-dim border-custom-border-dim"
                    } font-semibold border-t-2`}
                  >
                    <td
                      className={`px-6 py-4 text-sm font-bold ${
                        currentTheme === "light"
                          ? "text-dispute-color"
                          : "text-text-color"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          Σ
                        </div>
                        <span className="text-sm">Total</span>
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
                        currentTheme === "light"
                          ? "text-dispute-color"
                          : "text-text-color"
                      } opacity-50`}
                    >
                      -
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                        2.5%
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
                        currentTheme === "light"
                          ? "text-dispute-color"
                          : "text-text-color"
                      } opacity-50`}
                    >
                      -
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-8 text-center"
          >
            <motion.a
              href="https://bchscan.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-full text-white font-medium text-lg bg-black hover:bg-opacity-90 transition shadow-lg"
            >
              Visit More
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </Element>
  );
};

export default ExplorerSection;