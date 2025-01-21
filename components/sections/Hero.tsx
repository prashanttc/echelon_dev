'use client';

import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../../utils/motion'
import Image from 'next/image';
const Hero = () => {
    const transitionSettings = staggerContainer(0.1, 0.9);
    return (
        <section id='home' className='sm:pl-16 pl-6 pt-[100px] mb-32 '>
            <motion.div variants={transitionSettings} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.25 }} className='mx-auto flex flex-col inner-width'>
                <div className='flex justify-center items-center flex-col relative z-10'>
                    <motion.h1 variants={textVariant(1.1)} className='hero-heading'>
                        Echeleon
                    </motion.h1>
                    <motion.div variants={textVariant(1.2)} className='flex justify-center items-center flex-row'>
                        <span className='hero-Dtext'></span>
                        <h1 className='hero-heading md:mr-10'>ev</h1>
                        <h1 className='hero-heading'>society</h1>
                    </motion.div>
                </div>
                <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
                    <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[240px] z-0 -top-[30px]' />
                    <Image src='/cover.png' height={500} width={500} alt='image-hero' className='w-full sm:h-[500px] h-[250px] object-cover rounded-tl-[240px] z-10 relative' />
            
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
