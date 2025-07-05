"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-[#111] rounded-3xl px-6 md:px-12 py-16 flex flex-col items-center text-center border border-gray-700"
      >
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 bg-[#1f1f1f] text-sm text-gray-300 px-4 py-1 rounded-full">
          <span className="block w-2 h-2 rounded-full bg-lime-400"></span>
          Available for work
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Transforming ideas into powerful experiences.
        </h2>

        {/* Button */}
        <a
          href="mailto:your-email@example.com"
          className="inline-block border border-gray-500 hover:border-lime-400 text-white hover:text-lime-400 px-6 py-3 rounded-full transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
