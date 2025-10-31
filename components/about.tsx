"use client";

import { motion, cubicBezier } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

function about() {
    const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
  // Container animation — triggers all child motions
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOutExpo, // smooth "easeOutExpo" feel
        staggerChildren: 1.5,
      },
    },
  };

  // Each child item animation
  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 1,
      scale: 1,
      transition: { duration: 1.5, ease: easeOutExpo },
    },
  };
  return (
 <motion.div
      className="py-8 w-fit"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="container mx-4 md:mx-10 px-2 max-w-fit">
        <div className="flex justify-start text-3xl font-bold py-4">
          <motion.h2 variants={childVariants} className="capitalize">
            About me
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-2 justify-between text-wrap">
          <motion.p variants={childVariants} className="lg:w-1/2 leading-relaxed text-justify">
            Hey, what's up? My name is Valentine, and I like making things that
            are live on the internet. Deciphering difficult issues and producing
            outstanding digital experiences are things I'm enthusiastic about.
            <br />
            <br />
            With more than two years of experience as a frontend web developer,
            I specialize in creating amazing online experiences with flawless
            design. My studies have given me a strong grasp of web development
            principles, and I've spent a lot of time putting these principles to
            use in practical situations and projects.
            <br />
            <br />
            During my free time, I enjoy playing football and video games. In
            addition, I play the piano.
          </motion.p>

          <motion.span
            variants={childVariants}
            className="border-l-2 border-gray-300 pl-4 lg:w-1/2"
          >
            <motion.h5
              variants={childVariants}
              className="font-semibold capitalize pt-2 md:pt-0"
            >
              <i>Here are a few technologies I’ve been working with:</i>
            </motion.h5>

            <motion.ul
              variants={containerVariants}
              className="flex flex-row flex-wrap gap-4 md:grid md:grid-cols-3 md:gap-4 mt-2 italic font-mono opacity-[0.9] max-w-full"
            >
              {[
                "HTML5",
                "CSS3",
                "JavaScript(ES6+)",
                "TypeScript",
                "TailwindCSS",
                "React",
                "Next.js",
                "Git & GitHub",
                "Framer Motion",
                "Styled Components",
              ].map((tech, index) => (
                <motion.li key={index} variants={childVariants} className="p-1 max-w-fit border-l-2 border-gray-500 bg-gray-300 drop-shadow-lg">
                   {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default about;
