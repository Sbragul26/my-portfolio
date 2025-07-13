import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import NameSection from "../components/nameSection";
import Skills from "../components/skills";
import WorkExperience from "../components/exprience";
import NavBar from "../components/navBar";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and when resized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Toast messages to cycle through
  const toastMessages = [
    // JSX element for the first toast
    <>
      This site's dark web mirror 👉{" "}
      <a
        href="http://rag-mirror.onion"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 underline"
      >
        here
      </a>
    </>,
    // Plain strings for others

  ];


  // Trigger rotating toasts every 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      toast.success(toastMessages[0], {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          width: "350px",
          background: "linear-gradient(135deg, #000000, #333333)",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          border: "1px solid #555555",
        },
      });
    }, 5000); 

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic styles based on screen size
  const sideSpacerStyle = {
    width: isMobile ? "0%" : "5%",
    display: isMobile ? "none" : "block",
  };

  const mainContentStyle = {
    width: isMobile ? "100%" : "90%",
    padding: isMobile ? "0 16px" : "0",
  };

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen w-full bg-neutral-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <section className="w-full">
        <NavBar onNavigate={scrollToSection} />
      </section>

      <div className="flex w-full">
        {/* Left spacer */}
        <div style={sideSpacerStyle} className="flex"></div>

        {/* Main content */}
        <div
          style={mainContentStyle}
          className="flex flex-col items-center justify-center overflow-hidden"
        >
          <section id="home">
            <NameSection />
          </section>
          <section id="experience" className={isMobile ? "mt-20" : "mt-28"}>
            <WorkExperience />
          </section>
          <section className="mt-12 w-full" id="skills">
            <Skills />
          </section>
          {/*
          <section id="products" className="w-full">
            <ProjectsList />
          </section>
          
          <section id="projects" className="w-full">
            <OtherProjects />
          </section>
          
          <section id="contact" className="w-full">
            <Footer />
          </section>
          */}
        </div>

        {/* Right spacer */}
        <div style={sideSpacerStyle} className="flex"></div>
      </div>
    </motion.div>
  );
}

export default HomePage;