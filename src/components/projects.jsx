import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OtherProjects() {
  const Navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

const projects = [
  {
    id: 1,
    title: "TradeGuard - AI-Powered DApp",
    subtitle: "Blockchain & AI Developer",
    description:
      "TradeGuard is an AI-powered decentralized trading platform built on the Aptos blockchain. It enables traders to manage risk effectively by automatically adjusting leverage, hedging positions, and preventing liquidation. With real-time market data and AI predictions, it executes smart trades to optimize profits and minimize losses. Users can connect Martian Wallet and trade using Move smart contracts. The platform includes features like live blockchain feeds, price charts, crypto news, exchange tools, and wallet integrations.",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "Aptos",
      "Move",
      "AI Model",
      "Martian Wallet",
    ],
    githubLink: "https://github.com/Sbragul26/wqi.dev", // Add GitHub link if available
    appLink: "https://tradeguard-wqi.vercel.app/", // Replace with deployed link if available
    isPrivate: false, // Assumed based on context
    hosted: true, // Based on provided previewLink
  },
  {
    id: 2,
    title: "Nexora Creations - Agency Portfolio",
    subtitle: "Frontend Developer",
    description:
      "Developed a professional portfolio website for Nexora Creations, a digital agency, showcasing services, projects, and client testimonials. The platform is built with a modern, responsive design to attract potential clients and highlight the agency's creative and technical expertise. Features include dynamic project galleries, contact forms, and smooth animations for an engaging user experience.",
    technologies: ["React", "TailwindCSS", "Node.js", "Express"], // Assumed based on "using react ..etc.."
    githubLink: "https://github.com/Sbragul26/nexora-creations", // Add GitHub link if available
    appLink: "https://nexora-creations.vercel.app/", // Add deployed link if available
    isPrivate: false, // Assumed based on typical portfolio visibility
    hosted: true, // Assumed as portfolios are typically hosted
  },
  {
    id: 3,
    title: "SMS Spam Classifier",
    subtitle: "Machine Learning Developer",
    description:
      "Built an SMS spam classifier using machine learning techniques to detect and filter spam messages with high accuracy. The model processes text data, identifies patterns, and classifies messages as spam or non-spam. The project includes a user-friendly interface for testing and integrating the classifier with messaging systems.",
    technologies: ["Python", "Scikit-learn", "Pandas", "React", "Flask"], // Assumed ML and frontend tech
    githubLink: "https://github.com/Sbragul26/SMS-Spam-classifier", // Add GitHub link if available
    appLink: "", // Add deployed link if available
    isPrivate: false, // Assumed based on typical project visibility
    hosted: false, // Assumed as ML projects may not always be hosted
  },
];

  // Setup intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById("projects-section");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls]);

  // Calculate how many projects to show
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Toggle function to handle both show more and show less
  const toggleShowProjects = () => {
    setShowAll(!showAll);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="projects-section"
      className="w-full py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-8 lg:px-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4 md:px-6 text-center sm:text-left"
        variants={titleVariants}
      >
        Other Projects
      </motion.h1>

      <div className="px-0 sm:px-2 md:px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col"
                variants={childVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 font-spacegrotesk font-bold">
                        {project.subtitle || "Project subtitle"}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {project.hosted ? (
                        <a
                          href={project.appLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center border border-gray-300 rounded-md p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Visit project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      ) : (
                        <div
                          className="inline-flex items-center justify-center border border-gray-300 rounded-md p-1.5 sm:p-2 bg-gray-50 text-gray-400 cursor-not-allowed"
                          title="Not hosted because India post is using this solution"
                        >
                          <Lock size={18} />
                        </div>
                      )}
                      {project.isPrivate ? (
                        <div
                          className="inline-flex items-center justify-center border border-gray-300 rounded-md p-1.5 sm:p-2 bg-gray-50 text-gray-400 cursor-not-allowed"
                          title="Private repository"
                        >
                          <Lock size={18} />
                        </div>
                      ) : (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center border border-gray-300 rounded-md p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Visit GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 overflow-y-auto mt-2 pr-1 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button (commented out in original) */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "show-less" : "show-more"}
            className="flex justify-center mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={childVariants}
          >
            <button
              onClick={toggleShowProjects}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
}
