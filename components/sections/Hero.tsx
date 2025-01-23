"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";
import Image from "next/image";
const Hero = () => {
  const transitionSettings = staggerContainer(0.1, 0.1);
  return (
    <>
      <div className="hero-gradient z-0" />
      <section id="home" className=" mb-32 ">
        <motion.div
          variants={transitionSettings}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" flex "
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 2)} className="hidden md:block ">
            <Image
              src="/get-started.png"
              width={1000}
              priority
              height={1000}
              alt="globe-hero"
              className=" h-[400px] w-[400px] md:h-[800px] md:w-[800px] "
            />
          </motion.div>
          <div
            className="flex justify-center text-left items-center  flex-col relative w-full h-screen md:w-[50%]  md:items-start z-10">
            <motion.h1 variants={fadeIn('left','tween',0.5,0.5)} className="hero-heading">
              Echelon
            </motion.h1>
            <motion.div
              variants={fadeIn('left','tween',1,0.5)}
              className="flex flex-col justify-center items-center "
            >
           <div className="flex items-center">
           <h1 className="hero-Dtext"></h1>
           <h1 className="hero-heading mr-5">ev</h1>
           </div>
              <h1 className="hero-heading">society</h1>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
