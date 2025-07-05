// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-gray-950 to-black flex flex-col justify-center px-6 md:px-12 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//       >
//         {/* Text Content */}
//         <div>
//           <p className="flex items-center gap-2 text-lime-400 font-medium mb-3">
//             👋 Hi, I'm
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
//             Piyush Gogoriya
//           </h1>

//           <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
//             Full-Stack Developer | JavaScript, Node.js, Angular, React
//           </h2>

//           <p className="text-gray-400 max-w-2xl mb-10">
//             3+ years designing and building scalable web applications. Passionate about crafting
//             clean code, improving user experiences, and delivering impactful solutions.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-10">
//             <Link href="#projects">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-lime-500 text-black px-6 py-3 rounded-full font-medium transition"
//               >
//                 View My Work
//               </motion.button>
//             </Link>
//             <a
//               href="mailto:piyushgogoriya0312@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border border-gray-600 px-6 py-3 rounded-full font-medium text-white hover:bg-white hover:text-black transition"
//               >
//                 Contact Me
//               </motion.button>
//             </a>
//           </div>

//           <div className="flex gap-6 text-gray-400">
//             <a
//               href="https://www.linkedin.com/in/piyush-gogoriya/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white transition"
//             >
//               LinkedIn ↗
//             </a>
//             <a
//               href="https://github.com/PiyushGogo"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white transition"
//             >
//               GitHub ↗
//             </a>
//             <a
//               href="mailto:piyushgogoriya0312@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-white transition"
//             >
//               Email ↗
//             </a>
//           </div>
//         </div>

//         {/* Profile Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//           className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
//         >
//           <Image
//             src="/profile.jpeg" // Make sure you have this file in /public
//             alt="Piyush Gogoriya"
//             fill
//             className="object-cover"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function HeroAnimated() {
//   return (
//     <section className="relative  pt-50 flex flex-col justify-center items-center min-h-screen overflow-hidden bg-black text-white">
//       {/* Animated gradient background */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient"
//       />

//       {/* Floating profile picture */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{
//           opacity: 1,
//           y: [0, -10, 0],
//         }}
//         transition={{
//           opacity: { duration: 1, ease: "easeOut" },
//           y: {
//             repeat: Infinity,
//             duration: 4,
//             ease: "easeInOut",
//           },
//         }}
//         className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl z-10"
//       >
//         <Image
//           src="/profile.jpeg"
//           alt="Piyush Gogoriya"
//           fill
//           className="object-cover"
//         />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//         className="relative z-10 mt-6 text-center px-4"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//           Hey, I'm <span className="text-indigo-400">Piyush Gogoriya</span>
//         </h1>
//         <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
//           Full-Stack Developer & Problem Solver
//         </h2>
//         <p className="text-gray-400 max-w-xl mx-auto mb-10">
//           I build fast, modern web experiences using JavaScript, Node.js,
//           Angular, and React. Passionate about clean code, great UX, and bringing ideas to life.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <Link href="#projects">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-indigo-500 text-white px-6 py-3 rounded-full font-medium transition"
//             >
//               View Portfolio
//             </motion.button>
//           </Link>
//           <a
//             href="mailto:piyushgogoriya0312@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="border border-gray-600 px-6 py-3 rounded-full font-medium text-white hover:bg-white hover:text-black transition"
//             >
//               Get in Touch
//             </motion.button>
//           </a>
//         </div>

//         {/* Social links */}
//         <div className="flex justify-center gap-6 text-gray-400 text-sm">
//           <a
//             href="https://www.linkedin.com/in/piyush-gogoriya/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition"
//           >
//             LinkedIn ↗
//           </a>
//           <a
//             href="https://github.com/PiyushGogo"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition"
//           >
//             GitHub ↗
//           </a>
//           <a
//             href="mailto:piyushgogoriya0312@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition"
//           >
//             Email ↗
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function HeroSplit() {
//   const highlights = [
//     "⚡ Expert in microservices, scalability, and high-performance backend development",
//     "🎯 Skilled in building responsive frontends with React and Angular",
//     "🚀 Proficient in DevOps, CI/CD, and cloud deployments",
//   ];

//     // const phrases = [
//     // "enterprise-grade web applications",
//     // "microservices architecture",
//     // "scalable backend systems",
//     // "responsive front-end development",
//     // "RESTful and GraphQL APIs",
//     // "performance optimization",
//     // ];

//     const phrases = [
//         "robust backends",
//         "scalable systems",
//         "microservices architecture",
//         "modern frontends",
//         "RESTful APIs",
//         "performance tuning",
//         ];


//   const [current, setCurrent] = useState(0);

//   // Rotate phrases every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % phrases.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white px-6 md:px-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
//         {/* Text */}
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           {/* Heading */}
//           <motion.h1
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-4xl md:text-6xl font-extrabold mb-4"
//           >
//             Hi, I’m{" "}
//             <motion.span
//               animate={{
//                 color: ["#818cf8", "#a78bfa", "#818cf8"],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//               }}
//               className="text-indigo-400"
//             >
//               Piyush Gogoriya
//             </motion.span>
//           </motion.h1>

//           {/* Subheading with animated phrases */}
//           <motion.h2
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-xl md:text-2xl font-medium text-gray-300 mb-6 flex flex-wrap gap-2"
//           >
//             <span>Full-Stack Developer | </span>
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={phrases[current]}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-indigo-400"
//               >
//                 {phrases[current]}
//               </motion.span>
//             </AnimatePresence>
//           </motion.h2>

//           {/* Highlights */}
//           <motion.ul className="space-y-2 mb-8">
//             {highlights.map((point, idx) => (
//               <motion.li
//                 key={idx}
//                 variants={{
//                   hidden: { opacity: 0, y: 10 },
//                   show: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="text-gray-400"
//               >
//                 {point}
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* Buttons */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="flex flex-wrap gap-4"
//           >
//             <Link href="#projects">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-indigo-500 text-white px-6 py-3 rounded-full font-medium transition"
//               >
//                 See My Work
//               </motion.button>
//             </Link>
//             <a
//               href="mailto:piyushgogoriya0312@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border border-gray-600 px-6 py-3 rounded-full font-medium text-white hover:bg-white hover:text-black transition"
//               >
//                 Contact Me
//               </motion.button>
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{
//             opacity: 1,
//             y: [0, -10, 0],
//           }}
//           transition={{
//             opacity: { duration: 0.8, ease: "easeOut" },
//             y: {
//               duration: 4,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "reverse",
//             },
//           }}
//           className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-xl overflow-hidden border-4 border-indigo-500 shadow-xl"
//         >
//           <Image
//             src="/profile.jpeg"
//             alt="Piyush Gogoriya"
//             fill
//             className="object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSplit() {
  const highlights = [
    "⚡ Expert in microservices, scalability, and high-performance backend development",
    "🎯 Skilled in building responsive frontends with React and Angular",
    "🚀 Proficient in performance optimization",
  ];

  const phrases = [
    "robust backends",
    "scalable systems",
    "microservices architecture",
    "modern frontends",
    "RESTful APIs",
    "performance tuning",
  ];

  const [current, setCurrent] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);

  // Rotate phrases every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hide greeting after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Animated Greeting */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold"
          >
            <span className="flex items-center gap-3">
              👋 <span>Hello there!</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showGreeting && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Hi, I’m{" "}
              <motion.span
                animate={{
                  color: ["#818cf8", "#a78bfa", "#818cf8"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="text-indigo-400"
              >
                Piyush Gogoriya
              </motion.span>
            </motion.h1>

            {/* Subheading with rotating phrases */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-gray-300 mb-6 flex flex-wrap gap-2"
            >
              <span>Full-Stack Developer specializing in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[current]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-indigo-400"
                >
                  {phrases[current]}
                </motion.span>
              </AnimatePresence>
            </motion.h2>

            {/* Highlights */}
            <motion.ul className="space-y-2 mb-8">
              {highlights.map((point, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-gray-400"
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-500 text-white px-6 py-3 rounded-full font-medium transition"
                >
                  See My Work
                </motion.button>
              </Link>
              <a
                href="mailto:piyushgogoriya0312@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 px-6 py-3 rounded-full font-medium text-white hover:bg-white hover:text-black transition"
                >
                  Contact Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-xl overflow-hidden border-4 border-indigo-500 shadow-xl"
          >
            <Image
              src="/profile.jpeg"
              alt="Piyush Gogoriya"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}




