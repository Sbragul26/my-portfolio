import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eqrevImage from "../assets/eqrev.jpg"; // Import your image here

const ProjectsList = () => {
  // Sample project data
const projects = [
  {
    id: 1,
    title: "SmartRx",
    role: "Full Stack Developer",
    description:
      "SmartRx is an AI-powered health companion that simplifies and secures medication management. It allows users to analyze prescriptions, track medications, receive timely refill and appointment reminders, and access nearby hospitals or pharmacies through map-based directions. The platform ensures user safety by detecting drug interactions, providing personalized health tips, and maintaining a digital history with emergency QR access for critical situations.",
    image: smartrxImage, // Replace with your image path like import smartrxImage from '../assets/smartrx.png'
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "Google Maps API",
      "AI",
    ],
    previewLink: "http://localhost:5173", // Or your live deployed link
  },
  {
    id: 2,
    title: "TradeGuard - AI-Powered DApp",
    role: "Blockchain & AI Developer",
    description:
      "TradeGuard is an AI-powered decentralized trading platform built on the Aptos blockchain. It enables traders to manage risk effectively by automatically adjusting leverage, hedging positions, and preventing liquidation. With real-time market data and AI predictions, it executes smart trades to optimize profits and minimize losses. Users can connect Martian Wallet and trade using Move smart contracts. The platform includes features like live blockchain feeds, price charts, crypto news, exchange tools, and wallet integrations.",
    image: tradeguardImage, // Replace with your image path like import tradeguardImage from '../assets/tradeguard.png'
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
    previewLink: "http://localhost:5173", // Or your deployed app link
  },
];


  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-2xl sm:text-3xl font-heading font-bold mb-8 sm:mb-12 sm:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Some Things I've Built
      </motion.h1>

      <div className="space-y-12 sm:space-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const imageVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative border-r-0 lg:border-r-4 border-zinc-200 pr-0 lg:pr-2"
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Project image */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center"
        variants={imageVariants}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 object-cover border-l-0 sm:border-l-4 border-zinc-200 rounded-sm"
        />
      </motion.div>

      {/* Project content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center"
        variants={contentVariants}
      >
        <div className="text-gray-500 mb-1 font-mono text-sm">
          {project.role}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
          {project.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 font-mono text-xs sm:text-sm text-gray-600">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 rounded">
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors w-max text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Preview
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsList;
