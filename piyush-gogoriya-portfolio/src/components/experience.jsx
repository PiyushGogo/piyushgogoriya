"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function Experience() {
  const experiences = [
    {
      company: "Finxer Technologies Pvt Ltd (Capital Now)",
      role: "Software Engineer",
      dates: "Mar 2022 – Present",
      image: "https://source.unsplash.com/400x300?code", 
      description: [
        "Built MIS dashboard using Angular (frontend) and Node.js (backend) to visualize business metrics.",
        "Created EV marketplace with filters and API integration, increasing user engagement by 12%.",
        "Optimized 20+ pages with Angular SSR and TypeScript to improve performance and SEO by 15%.",
        "Integrated 5+ third-party vendor APIs using Node.js and PHP, improving service capabilities.",
        "Developed Firebase-based notification system for SMS, push, and email engagement (+10%).",
        "Migrated legacy PHP APIs to Node.js, enhancing maintainability and scalability.",
        "Developed 20+ scalable RESTful APIs with Express.js to support business workflows."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center"
    >
      < SectionHeading label="Career" title="Professional Experience" />

      <div className="grid gap-6 max-w-5xl w-full">
        {experiences.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[#111] rounded-lg p-6 border border-gray-700 hover:border-lime-400 hover:shadow-lg transition cursor-default grid md:grid-cols-3 gap-4"
          >
            {/* Left Side */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <span className="text-xs text-gray-400">{item.dates}</span>
              </div>
              <p className="text-sm text-lime-400 mb-3">{item.role}</p>
              <ul className="list-disc ml-4 space-y-1 text-gray-300 text-sm">
                {item.description.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
            {/* Right Side Image */}
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.company}
                className="rounded-md w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
