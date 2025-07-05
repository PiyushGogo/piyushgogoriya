// "use client";

// import { motion } from "framer-motion";
// import SectionHeading from "./sectionHeading";

// export default function Projects() {
//   const projects = [
//     {
//       title: "EV Marketplace Platform",
//       description: "An e-commerce marketplace for electric vehicles with filtering, product details, and vendor APIs.",
//       image: "https://source.unsplash.com/800x600?electric-car",
//       tech: ["Angular", "Node.js", "Express", "MongoDB"],
//       github: "https://github.com/yourusername/ev-marketplace",
//       demo: "https://ev-marketplace.demo.com"
//     },
//     {
//       title: "MIS Dashboard",
//       description: "A business intelligence dashboard visualizing key metrics and KPIs in real-time.",
//       image: "https://source.unsplash.com/800x600?dashboard",
//       tech: ["Angular", "Node.js", "Firebase"],
//       github: "https://github.com/yourusername/mis-dashboard",
//       demo: "https://mis-dashboard.demo.com"
//     },
//     {
//       title: "Notification Service",
//       description: "A notification system supporting SMS, push notifications, and email engagement.",
//       image: "https://source.unsplash.com/800x600?notification",
//       tech: ["Node.js", "Firebase", "Express"],
//       github: "https://github.com/yourusername/notification-service",
//       demo: "https://notification-service.demo.com"
//     }
//   ];

//   return (
//     <section
//       id="projects"
//       className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center"
//     >
//       <SectionHeading label="Work" title="Projects" />

//       <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: idx * 0.1 }}
//             className="bg-[#111] border border-gray-700 rounded-lg overflow-hidden hover:border-lime-400 transition"
//           >
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Content */}
//             <div className="p-4 flex flex-col gap-3">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-400">{project.description}</p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.tech.map((tech, tIdx) => (
//                   <span
//                     key={tIdx}
//                     className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-2 mt-4">
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-lime-500 hover:bg-lime-600 text-black text-xs font-medium px-3 py-1.5 rounded transition"
//                 >
//                   View Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border border-gray-600 hover:border-lime-400 text-xs font-medium px-3 py-1.5 rounded transition"
//                 >
//                   View Code
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center"
    >
      <SectionHeading label="Work" title="Projects" />

      <div className="grid gap-8 md:grid-cols-1 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative bg-[#111] border border-gray-700 rounded-lg flex flex-col justify-center items-center text-center hover:border-lime-400 transition p-12"
        >
          {/* Emoji or Icon */}
          <div className="text-5xl mb-4">🚀</div>

          {/* Headline */}
          <h3 className="text-xl font-bold mb-2">
            Big Things In The Works
          </h3>

          {/* Subtext */}
          <p className="text-sm text-gray-400 mb-4 max-w-md">
           Big ideas are taking shape behind the scenes. I’m crafting full-stack apps with Next.js and modern technologies—check back soon to see them live!
          </p>

          {/* Tagline */}
          <span className="text-xs text-lime-400 uppercase tracking-widest font-medium">
            Coming Soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
