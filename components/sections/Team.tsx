'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { Core } from '../../constants/index'
import TeamCard from '../TeamCard';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import TeamCardMobile from '../TeamCardMobile';
const Team = () => {
  const [active, setActive] = useState("world-2")
  return (
    <section className='padding md:mt-10' id="explore">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='inner-width mx-auto flex flex-col'
      >
        <p className='text-center text-white mb-10'>The core</p>
      <h2 className='mt-[8px] text-white text-center text-[32px] sm:text-[62px] w-full font-bold'>
          Brilliant minds behind <br className="md:block hidden" />echelon
        </h2>
        <div className='mt-[100px]  gap-10 hidden md:flex '>
          {Core.map((member, index) => (
            <TeamCard active={active} role={member.role} imgUrl={member.imgUrl} name={member.name} id={member.id} key={index} index={index} handleclick={setActive} />
          ))}
        </div>
        <Carousel className='block md:hidden mt-[100px]'>
          <CarouselContent>
            {Core.map((member, index) => (
              <CarouselItem key={index}>
                <TeamCardMobile role={member.role} imgUrl={member.imgUrl} name={member.name} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Team;