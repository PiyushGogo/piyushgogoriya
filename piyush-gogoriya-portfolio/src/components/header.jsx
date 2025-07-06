// "use client";

// import { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const navigationItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#services" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { scrollY } = useScroll();

//   const width = useTransform(scrollY, [0, 200], ["100%", "50%"]);
//   const fontSize = useTransform(scrollY, [0, 200], ["16px", "14px"]);
//   const buttonPaddingY = useTransform(scrollY, [0, 200], [10, 6]);
//   const buttonPaddingX = useTransform(scrollY, [0, 200], [20, 12]);
//   const borderRadius = useTransform(scrollY, [0, 200], ["0", "20rem"]);

//   const [hoveredB, setHoveredB] = useState(false);

  

//   return (
//     <div className="bg-gray-50">
//       <div className=" fixed top-2 left-0 right-0 z-50 flex justify-center">
//         <motion.header
//           style={{
//             width,borderRadius,
//             backgroundColor: "#0b0b0dcc", // semi-transparent backdrop color
//             backdropFilter: "blur(12px)",
//             opacity: 1,
//           }}
//           className="bg-transparent backdrop-blur-md shadow-lg "
//           transition={{
//             duration: 0.3,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="h-full px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               <motion.div
//             onMouseEnter={() => setHoveredB(true)}
//             onMouseLeave={() => setHoveredB(false)}
//             className="text-[24px] w-[200] text-white ml-4 cursor-pointer z-20"
//             style={{ fontFamily: "Rinter" }}
//         >
//             <div className="inline-block">
//                 P
//                 <motion.span
//                     className="text-[24px] text-white inline-block align-baseline"
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{
//                         width: hoveredB ? "auto" : 0,
//                         opacity: hoveredB ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                     <motion.span
//                         className="inline-block whitespace-nowrap align-baseline"
//                         initial={{ x: -20 }}
//                         animate={{ x: hoveredB ? 0 : -20 }}
//                         transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                         iyush
//                     </motion.span>
//                 </motion.span>
//             </div>
//             <div className="inline-block">
//                 G
//                 <motion.span
//                     className="text-[24px] text-white inline-block align-baseline"
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{
//                         width: hoveredB ? "auto" : 0,
//                         opacity: hoveredB ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                     <motion.span
//                         className="inline-block whitespace-nowrap align-baseline"
//                         initial={{ x: -20 }}
//                         animate={{ x: hoveredB ? 0 : -20 }}
//                         transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                         ogoriya
//                     </motion.span>
//                 </motion.span>
//             </div>
//         </motion.div>

//               {/* Desktop Navigation */}
//               <nav className="hidden md:flex items-center space-x-6">
//                 {navigationItems.map((item) => (
//                   <motion.a
//                     key={item.name}
//                     href={item.href}
//                     style={{ fontSize }}
//                     className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 1.25 }}
//                   >
//                     {item.name}
//                   </motion.a>
//                 ))}
//               </nav>

//               {/* CTA Button */}
//               <motion.p
//                 className="hidden md:block bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
//                 style={{
//                   paddingTop: buttonPaddingY,
//                   paddingBottom: buttonPaddingY,
//                   paddingLeft: buttonPaddingX,
//                   paddingRight: buttonPaddingX,
//                   fontSize,
//                 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Resume
//               </motion.p>

//               {/* Mobile Menu Button */}
//               <button
//                 className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-6 h-6 text-gray-300" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-gray-300" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </motion.header>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg"
//         initial={false}
//         animate={{
//           height: isMobileMenuOpen ? "auto" : 0,
//           opacity: isMobileMenuOpen ? 1 : 0,
//           width,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         style={{ overflow: "hidden" }}
//       >
//         <div className="px-6 py-4 space-y-3">
//           {navigationItems.map((item) => (
//             <motion.a
//               key={item.name}
//               href={item.href}
//               className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
//               onClick={() => setIsMobileMenuOpen(false)}
//               whileTap={{ scale: 0.95 }}
//             >
//               {item.name}
//             </motion.a>
//           ))}
//           <motion.button
//             className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mt-4"
//             whileTap={{ scale: 0.95 }}
//           >
//             Get Started
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect desktop vs mobile
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();

  // Transforms for collapsing
  const width = useTransform(scrollY, [0, 200], ["100%", "50%"]);
  const fontSize = useTransform(scrollY, [0, 200], ["16px", "14px"]);
  const buttonPaddingY = useTransform(scrollY, [0, 200], [10, 6]);
  const buttonPaddingX = useTransform(scrollY, [0, 200], [20, 12]);
  const borderRadius = useTransform(scrollY, [0, 200], ["0", "20rem"]);

  const [hoveredB, setHoveredB] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      <div
        className="fixed left-0 right-0 z-50 flex justify-center"
        style={{ top: isDesktop ? "20px" : "0px" }}
      >
        <motion.header
          style={{
            width: isDesktop ? width : "100%",
            borderRadius: isDesktop ? borderRadius : "0",
            backgroundColor: "#0b0b0dcc", // semi-transparent backdrop color
            backdropFilter: "blur(12px)",
            opacity: 1,
          }}
          className="bg-transparent backdrop-blur-md shadow-lg"
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="h-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div
                onMouseEnter={() => setHoveredB(true)}
                onMouseLeave={() => setHoveredB(false)}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-[24px] w-[200] text-white ml-4 cursor-pointer z-20"
                style={{ fontFamily: "Rinter" }}
              >
                <div className="inline-block">
                  P
                  <motion.span
                    className="text-[24px] text-white inline-block align-baseline"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: hoveredB ? "auto" : 0,
                      opacity: hoveredB ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.span
                      className="inline-block whitespace-nowrap align-baseline"
                      initial={{ x: -20 }}
                      animate={{ x: hoveredB ? 0 : -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      iyush
                    </motion.span>
                  </motion.span>
                </div>
                <div className="inline-block">
                  G
                  <motion.span
                    className="text-[24px] text-white inline-block align-baseline"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: hoveredB ? "auto" : 0,
                      opacity: hoveredB ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.span
                      className="inline-block whitespace-nowrap align-baseline"
                      initial={{ x: -20 }}
                      animate={{ x: hoveredB ? 0 : -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      ogoriya
                    </motion.span>
                  </motion.span>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    style={{ fontSize }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.25 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.p
                className="hidden md:block bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                style={{
                  paddingTop: buttonPaddingY,
                  paddingBottom: buttonPaddingY,
                  paddingLeft: buttonPaddingX,
                  paddingRight: buttonPaddingX,
                  fontSize,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.p>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 md:hidden bg-gray-50 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
          width: "90%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 py-4 space-y-3">
          {navigationItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mt-4"
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

