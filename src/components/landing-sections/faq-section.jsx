import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp, Hash } from "lucide-react";

// Updated FAQ data for BC Cash
const faqData = [
  {
    question: "How can I build my financial future with BC Cash?",
    answer: "Grow your assets by swapping, staking, or holding BC Cash—enjoy low fees and flexible rewards designed for everyday users. As the project expands, early adopters can benefit from new earning opportunities."
  },
  {
    question: "How can I buy BC Cash?",
    answer: "Getting started is simple: create a wallet like MetaMask or Trust Wallet, fund it with USDT or INR, and swap for BC Cash on popular exchanges such as BC Exchange or BC Swap."
  },
  {
    question: "How do transactions and fees work?",
    answer: "BC Cash transactions are ultra-fast and settle within seconds. Fees are transparent, affordable, and clearly shown before you confirm—so there are no surprises."
  },
  {
    question: "What can I do with BC Cash?",
    answer: "You can send, swap, stake, and spend BC Cash with supported merchants or use it in DeFi, gaming, and NFT apps. The ecosystem keeps expanding!"
  },
  {
    question: "Is BC Cash audited or secure?",
    answer: "Yes—BC Cash uses multi-layer cryptography and has undergone smart contract audits. Providing you self-custody options ensures your assets stay safe."
  },
  {
    question: "Where can I find updates and join the community?",
    answer: "Stay up to date by reading the BC Cash official website, following social channels, or joining Telegram and Discord. Community feedback helps shape future releases!"
  },
  {
    question: "Is BC Cash a \"Pump & Dump\" or a real project?",
    answer: "BC Cash is committed to long-term growth and proven utility. Registered and regularly audited, it's designed for real financial use—not just short-term speculation."
  }
];

const FaqSection = () => {
  // The first item is open by default.
  const [expandedIndex, setExpandedIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Element name="faq" className="h-full">
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center text-dispute-color">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Title and Description */}
          <div className="md:sticky md:top-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-sub-card border border-custom-border text-accent rounded-full text-sm font-medium btn-transition">
                <Hash size={16} />
                Frequently asked questions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-dispute-color leading-tight mb-6">
                Frequently asked
                <br />
                <span className="text-accent">questions</span>
              </h2>
              {/* Updated description text */}
              <p className="text-base text-dispute-color opacity-80 leading-relaxed">
                Everything you need to know about BC Cash - from getting started to building your financial future with our secure, fast, and user-friendly platform.
              </p>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            ref={ref}
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                className="group bg-card border border-custom-border rounded-2xl overflow-hidden btn-transition relative"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-teal opacity-0 group-hover:opacity-5 btn-transition rounded-2xl" />
                
                <button
                  onClick={() => toggleExpanded(idx)}
                  className="relative z-10 w-full p-6 text-left flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  {/* Question text */}
                  <h3 className="text-base font-semibold text-dispute-color pr-4 group-hover:text-accent btn-transition">
                    {faq.question}
                  </h3>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-sub-card border border-custom-border group-hover:border-accent group-hover:bg-accent flex items-center justify-center flex-shrink-0 btn-transition"
                  >
                    <motion.div
                      animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {expandedIndex === idx ? (
                        <ChevronUp size={20} className="text-dispute-color group-hover:text-white btn-transition" />
                      ) : (
                        <ChevronDown size={20} className="text-dispute-color group-hover:text-white btn-transition" />
                      )}
                    </motion.div>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative z-10 overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-custom-border mb-4 opacity-50"></div>
                        <p className="text-dispute-color leading-relaxed text-sm opacity-90">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-teal opacity-0 group-hover:opacity-100 btn-transition rounded-b-2xl"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default FaqSection;