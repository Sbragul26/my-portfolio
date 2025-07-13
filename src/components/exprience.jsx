import React, { useState } from "react";

export default function WorkExperience() {
const experiences = [
  {
    company: "SimTestLab",
    role: "Web Developer Intern",
    department: "SimTestLab",
    period: "May 2025 – June 2025",
    responsibilities: [
      "Completed a hands-on internship focused on full-stack development using React.js, Next.js, and JavaScript across 4 real-world web modules.",
      "Engineered a JSON Code Converter that transforms JSON into C, C++, Java, Python, and JavaScript, with a verified 95% conversion accuracy across 200+ test inputs.",
      "Optimized component lifecycle using React Hooks and Next.js routing, reducing load times by 30% and increasing scalability.",
      "Executed comprehensive code reviews and testing strategies to ensure product quality and maintainability.",
    ],
  },
  {
    company: "SourceCorp",
    role: "UI/UX Developer Intern",
    department: "SourceCorp",
    period: "July 2025 – Current",
    responsibilities: [
      "Designed and implemented an intuitive, user-friendly UI/UX for a web-based dashboard to enhance client accessibility and engagement.",
      "Worked closely with stakeholders to translate requirements into clean, responsive interface designs using Figma, HTML/CSS, and React.",
      "Improved navigation flow and interface consistency, resulting in a 40% increase in user satisfaction based on internal feedback.",
      "Ensured accessibility compliance and cross-device responsiveness using modern UI frameworks and best design practices.",
    ],
  },
];


  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <div className="max-w-6xl mx-auto pt-8">
      <h1 className="text-3xl font-font-roboto font-bold mb-8">
        Where I've Worked
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar with list of companies */}
        <div className="md:w-1/4 flex-shrink-0">
          <div className="flex flex-col border-l-2 border-gray-300">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`p-4 text-left font-spacegrotesk hover:bg-gray-100 transition-colors duration-300 ease-in-out border-l-4 ${
                  selectedExp === index
                    ? "border-black font-bold bg-gray-100"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedExp(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Right side with selected experience details */}
        <div className="font-roboto md:w-3/4 ">
          <div className="mb-4 font-bolder flex flex-col gap-2">
            <h2 className="text-xl md:text-4xl">
              <span className="font-heading font-bold text-gray-500">
                {experiences[selectedExp].role}
              </span>{" "}
              <span className="font-bold">at </span>
              <span className="underline decoration-2 decoration-gray-500 font-bold">
                {experiences[selectedExp].department}
              </span>
            </h2>
            <p className="text-sm mb-6 font-bold md:text-xl mb-6 font-bold">
              {experiences[selectedExp].period}
            </p>
          </div>

          <ul className="list-disc ml-5 space-y-3 font-heading">
            {experiences[selectedExp].responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
