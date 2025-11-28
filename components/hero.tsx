"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const lineVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

function hero() {
  return (
    <div className="mx-4 md:mx-10 px-2 flex flex-col gap-2 justify-center items-start h-[80vh] sm:h-[75vh] md:h-[65vh] lg:h-[55vh]">
      <motion.p
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-base"
      >
        Hi, my name is
      </motion.p>

      <motion.h2
        variants={lineVariants}
        // initial="hidden"
        // animate="visible"
        custom={1}
        className="text-2xl font-semibold mt-1"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        Valentine Kosisochukwu...
      </motion.h2>
      <motion.h1
        variants={lineVariants}
        // initial="hidden"
        // animate="visible"
        custom={2}
        className="text-4xl font-bold mt-2"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        I Build Things On The Web.
      </motion.h1>
      <motion.p
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        className="max-w-xl mt-2"
      >
        I'm a Frontend Developer specialized in creating intuitive and optimized
        web apps using modern technologies. With focus on clean code and
        seamless user experiences. <br />
        <b className="capitalize">let's get to work ASAP!!!</b>
      </motion.p>
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        className="flex gap-4 mt-3"
      >
        <Link
          href="https://github.com/Valentinekosisochukwu"
          target="_blank"
          // rel="noopener noreferrer"
        >
          <Button
            variant="secondary"
            className="cursor-pointer hover:bg-black hover:text-white transition-all duration-500 flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Projects
          </Button>
        </Link>

        <Link href="https://drive.google.com/file/d/12w6CT3bXuJhrTDbbCf05nuAPKLXLLe1e/view"  rel="noopener noreferrer">
          <Button
            variant="default"
            className="cursor-pointer hover:bg-gray-700 hover:text-white transition-all duration-500"
          > <Download size={20}/>
            <p>My Resume</p>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

export default hero;
