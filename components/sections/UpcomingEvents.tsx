"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import {  news } from "@/constants";
import NewsCard from "../NewsCard";
const UpcomingEvents = () => {
  return (
    <> 
    <section className="md:padding relative w-full " id="news">
       <div className="gradient-04 z-0 hidden md:block" />
       <div className="gradient-03 z-0 " />
       <div className="feedback-gradient z-0 right-0 " />
      <motion.div
        variants={staggerContainer(0.9, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-0  w-full md:mx-auto items-center justify-center flex flex-col"
      >
        <h1 className="text-center text-[10px] mb-10 sm:text-[14px] text-white z-10">Upcoming Events</h1>
        <h1 className="text-center font-semibold text-[32px] z-10 sm:text-[64px] text-white">updates and upcoming events</h1>
        <div className="mt-[50px] md:mt-[100px] w-full flex flex-col items-center gap-10 z-10">
            {news.map((news,index)=>(
                <NewsCard key={index} imgUrl={news.imgUrl} index={index} subheading={news.subheading} title={news.title}/>
            ))}
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default UpcomingEvents;
