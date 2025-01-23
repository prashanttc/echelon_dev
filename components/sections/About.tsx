"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const About = () => (
  <section id="about" className=" relative z-10 px-5 ">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer(0.1, 0.9)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex items-center justify-center mx-auto inner-width flex-col"
    >
      <p className="text-center mb-10  font-semibold text-[30px] md:text-[54px] text-white">
        About echelon
      </p>

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-light sm:text-[28px] text-[15px] w-full  text-center text-secondary-white"
      >
        <p>
          Echelon Dev Society is a vibrant college club dedicated to fostering
          innovation and technical expertise. Focused on bridging academic
          learning with real-world applications, the club organizes hackathons,
          workshops, and bootcamps on emerging technologies like AI, blockchain,
          and web development. Hackathons are a hallmark of the society,
          promoting teamwork, critical thinking, and creative problem-solving.
          Members benefit from mentorship, project showcases, and networking
          opportunities, preparing them for internships and careers in the tech
          industry. Echelon Dev Society is more than a club—it’s a community of
          passionate innovators shaping the future. Join us to explore, create,
          and lead!
        </p>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
