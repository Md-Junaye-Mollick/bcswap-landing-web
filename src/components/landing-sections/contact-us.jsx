import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  User, 
  Building2,
  Globe,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0); // FAQ state

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const toggleFaqExpanded = (index) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const faqItemVariants = {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "support@bccash.com",
      description: "Send us an email anytime!",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 84894 61122",
      description: "Mon-Fri from 8am to 5pm",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "Mumbai, Maharashtra",
      description: "Come say hello at our office HQ",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help during business hours",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    }
  ];

  // FAQ data from FaqSection
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

  return (
    <div className="min-h-screen mt-10 text-dispute-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-dispute-color"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-dispute-color max-w-2xl mx-auto"
          >
            Have questions about BC Cash? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card border border-custom-border rounded-xl p-6 hover:bg-sub-card transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <info.icon className={info.color} size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-dispute-color">{info.title}</h3>
              <p className="text-dispute-color font-medium mb-1">{info.value}</p>
              <p className="text-dispute-color text-sm">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-card border border-custom-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-dispute-color">Send us a message</h2>
            </div>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2 text-dispute-color">
                    <User size={16} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-dispute-color focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2 text-dispute-color">
                    <Mail size={16} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-dispute-color focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 flex items-center gap-2 text-dispute-color">
                  <Building2 size={16} />
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-dispute-color focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 flex items-center gap-2 text-dispute-color">
                  <Globe size={16} />
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-dispute-color focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2 text-dispute-color">
                  <MessageCircle size={16} />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-dispute-color focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Interactive FAQ Section */}
            <div className="bg-card border border-custom-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-dispute-color">Frequently Asked Questions</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4 max-h-[16rem] overflow-y-auto pr-2"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(59, 130, 246, 0.3) transparent'
                }}
              >
                <style jsx>{`
                  /* Custom scrollbar for webkit browsers */
                  .space-y-4::-webkit-scrollbar { =
                    width: 6px;
                  }
                  .space-y-4::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  .space-y-4::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 3px;
                  }
                  .space-y-4::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.5);
                  }
                `}</style>
                {faqData.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    variants={faqItemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    className="group bg-sub-card border border-custom-border rounded-xl overflow-hidden transition-all duration-300 relative"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    
                    <button
                      onClick={() => toggleFaqExpanded(idx)}
                      className="relative z-10 w-full p-4 text-left flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sub-card"
                    >
                      {/* Question text */}
                      <h4 className="text-sm font-semibold text-dispute-color pr-4 group-hover:text-blue-400 transition-colors duration-300">
                        {faq.question}
                      </h4>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 rounded-full bg-card border border-custom-border group-hover:border-blue-500 group-hover:bg-blue-500 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ rotate: expandedFaqIndex === idx ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {expandedFaqIndex === idx ? (
                            <ChevronUp size={16} className="text-dispute-color group-hover:text-white transition-colors duration-300" />
                          ) : (
                            <ChevronDown size={16} className="text-dispute-color group-hover:text-white transition-colors duration-300" />
                          )}
                        </motion.div>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedFaqIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="relative z-10 overflow-hidden"
                        >
                          <div className="px-4 pb-4">
                            <div className="w-full h-px bg-custom-border mb-3 opacity-50"></div>
                            <p className="text-dispute-color leading-relaxed text-sm opacity-90">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Border Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Support Hours */}
            <div className="bg-card border border-custom-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-dispute-color">Support Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dispute-color">Monday - Friday</span>
                  <span className="font-semibold text-dispute-color">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dispute-color">Saturday</span>
                  <span className="font-semibold text-dispute-color">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dispute-color">Sunday</span>
                  <span className="font-semibold text-dispute-color">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> Emergency support is available 24/7 for critical issues.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;