"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../utils/motion";
const Hero = () => {
  const transitionSettings = staggerContainer(0.1, 0.1);
  return (
    <>
      <div className="hero-gradient z-0" />
      <section id="home" className="sm:pl-16 pl-6  mb-32 ">
        <motion.div
          variants={transitionSettings}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto flex flex-col inner-width"
        >
          <div className="flex justify-center items-center flex-col relative w-full h-screen z-10">
            <motion.h1 variants={textVariant(0.9)} className="hero-heading">
              Echelon
            </motion.h1>
            <motion.div
              variants={textVariant(1)}
              className="flex justify-center items-center flex-row"
            >
              <span className="hero-Dtext"></span>
              <h1 className="hero-heading mr-5">ev</h1>
              <h1 className="hero-heading">society</h1>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
