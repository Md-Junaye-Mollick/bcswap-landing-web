import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowLeftRight,
  Send,
  Download,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Bridge Tokens",
    description:
      "Easily transfer tokens between different blockchains securely and efficiently.",
    icon: <ArrowLeftRight size={32} className="text-blue-500 group-hover:text-blue-400 transition-colors" />,
  },
  {
    title: "Send Tokens",
    description:
      "Send crypto assets instantly to any wallet address with minimal fees.",
    icon: <Send size={32} className="text-green-500 group-hover:text-green-400 transition-colors" />,
  },
  {
    title: "Receive Tokens",
    description:
      "Accept tokens from anyone, anytime — just share your wallet address.",
    icon: <Download size={32} className="text-purple-500 group-hover:text-purple-400 transition-colors" />,
  },
  {
    title: "Swap Tokens",
    description:
      "Exchange one token for another across multiple chains with real-time rates.",
    icon: <RefreshCcw size={32} className="text-orange-500 group-hover:text-orange-400 transition-colors" />,
  },
  {
    title: "Staking",
    description:
      "Stake your tokens to earn passive rewards and help secure the network.",
    icon: <ShieldCheck size={32} className="text-red-500 group-hover:text-red-400 transition-colors" />,
  },
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <Element name="features" className="h-full">
      <section className="w-full py-24 sm:px-8 xl:px-24 min-h-screen flex items-center justify-center text-dispute-color">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-16"
          >
            Core Features
          </motion.h2>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-custom-border cursor-pointer"
              >
                <motion.div
                  className="mb-4 p-4 bg-gray-800 rounded-full"
                  whileHover={{ rotate: 20, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-dispute-color dark:text-dispute-color-dark text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default FeaturesSection;