"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import Image from "next/image";

const Extra = () => (
  <section className="padding">
    <motion.div
      variants={staggerContainer(0.1, 0.9)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" inner-width mx-auto flex lg:flex-row flex-col gap-6"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[28px] text-[20px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Echelon Dev Society
          </h4>
   
        </div>

        <p className="mt-[24px] font-normal sm:text-[18px] text-[10px] sm:leading-[45.6px] leading-[19.6px] text-white">
        In today’s fast-paced tech landscape, hackathons are more than just competitions—they’re a platform for innovation, collaboration, and skill-building. Through our hackathon club, students can turn their ideas into reality and gain hands-on experience that prepares them for the challenges of tomorrow
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/WhatsApp Image 2025-01-22 at 20.35.29_113531ef.jpg"
          width={1000}
          height={1000}
          alt="mascot"
          className="w-full lg:h-[610px] bg-red-300 h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            width={540}
            height={540}
            src="/logo.png"
            alt="logo"
            className="w-[200px] h-[200px] object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Extra;
