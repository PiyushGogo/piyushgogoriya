"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ label, title }) {
  const titleLetters = title.split("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-left w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex items-center gap-2 mb-2">
        {/* Sparkle Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-lime-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L13.09 8.26L18 9.27L14.5 13.14L15.18 19.02L12 16.5L8.82 19.02L9.5 13.14L6 9.27L10.91 8.26L12 2Z" />
        </svg>
        <span className="text-lime-400 text-xs uppercase tracking-widest">
          {label}
        </span>
      </div>
      <motion.h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          text-left
          font-extrabold
          text-gray-100
          flex flex-wrap
          cursor-default
        "
        initial="hidden"
        whileInView="visible"
        // whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
      >
        {titleLetters.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{
              color: "#a78bfa", // subtle highlight on hover
              y: -2, // slight lift
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
}
