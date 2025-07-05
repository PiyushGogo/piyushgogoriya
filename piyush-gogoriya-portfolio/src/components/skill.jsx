
"use client";

import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
      color: "#61DAFB",
    },
    {
      name: "Angular",
      icon: "https://cdn.simpleicons.org/angular/DD0031",
      color: "#DD0031",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
      color: "#3178C6",
    },
    {
      name: "HTML",
      icon: "https://cdn.simpleicons.org/html5/E34F26",
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "https://cdn.simpleicons.org/css3/1572B6",
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs/339933",
      color: "#339933",
    },
    {
      name: "Express.js",
      icon: "https://cdn.simpleicons.org/express/000000",
      color: "#ffffff",
    },
    {
      name: "Java",
      icon: "https://cdn.simpleicons.org/java/007396",
      color: "#007396",
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
      color: "#4479A1",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb/47A248",
      color: "#47A248",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git/F05032",
      color: "#F05032",
    },
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker/2496ED",
      color: "#2496ED",
    },
    {
      name: "AWS",
      icon: "https://cdn.simpleicons.org/amazonaws/FF9900",
      color: "#FF9900",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center"
    >
      {/* <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
      >
        Tech Stack
      </motion.h2> */}
       <SectionHeading label="Speciality" title="Tech Stack" />


      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 15px ${skill.color}`,
            }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-md h-28 bg-[#111] hover:bg-[#181818] transition"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 mb-2"
            />
            <div className="text-sm">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export default function Skills() {
//   const skills = [
//     { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
//     { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
//     { name: "SASS", icon: "https://cdn.simpleicons.org/sass/CC6699" },
//     { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
//     { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
//     { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
//     { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
//     { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
//     { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
//     { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
//   ];

//   return (
//     <section
//       id="skills"
//       className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center"
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-extrabold mb-4 text-center"
//       >
//         What I do
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-gray-400 mb-12 text-center max-w-2xl"
//       >
//         I am a Full-Stack Developer skilled in creating scalable and modern web applications.
//       </motion.p>

//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//       >
//         {skills.map((skill, idx) => (
//           <motion.div
//             key={idx}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
//             }}
//             transition={{ duration: 0.3 }}
//             className="flex flex-col items-center justify-center p-4 bg-[#111] rounded-md h-32 cursor-pointer hover:bg-[#181818] transition"
//           >
//             <img
//               src={skill.icon}
//               alt={skill.name}
//               className="w-10 h-10 mb-2"
//             />
//             <div className="text-sm">{skill.name}</div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

