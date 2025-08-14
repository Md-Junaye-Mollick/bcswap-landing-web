import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, ChevronUp, Hash } from "lucide-react";

// Updated FAQ data to match the new content provided in the image.
const faqData = [
  {
    question: "What is Nicepay?",
    answer: "Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and ensure secure transactions for businesses of all sizes."
  },
  {
    question: "How does Nicepay work?",
    answer: "Nicepay integrates with your existing systems to streamline financial workflows. It automates payment collection, expense tracking, and provides real-time financial insights through a central dashboard."
  },
  {
    question: "Is Nicepay secure?",
    answer: "Yes, security is our top priority. We use bank-level encryption, multi-factor authentication, and comply with the highest industry standards to protect your data and transactions."
  },
  {
    question: "Can Nicepay integrate with other accounting software?",
    answer: "Absolutely. Nicepay is designed to work seamlessly with popular accounting software like QuickBooks, Xero, and Sage, ensuring your financial data is always in sync."
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
    <Element name="faq">
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Title and Description */}
          <div className="md:sticky md:top-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <Hash size={16} />
                Frequently asked questions
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Frequently asked
                <br />
                <span className="text-purple-600">questions</span>
              </h2>
              {/* Updated description text */}
              <p className="mt-4 text-base text-gray-600">
                Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.
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
                className="bg-gray-50 rounded-xl border border-gray-200/80 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpanded(idx)}
                  className="w-full p-5 text-left flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  {/* Changed question text color to deep blue */}
                  <h3 className="text-base font-semibold text-blue-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    {expandedIndex === idx ? (
                      <ChevronUp size={20} className="text-white" />
                    ) : (
                      <ChevronDown size={20} className="text-white" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default FaqSection;