import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
type Props = {
    imgUrl: string,
    title: string,
    subheading: string,
    index: number
}
const NewsCard = ({ imgUrl, title, subheading, index }: Props) => {
    return (
        <div>
            <motion.div
                variants={staggerContainer(0.1, 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='flex items-center justify-center inner-width flex-col'
            >
                <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className='w-full gap-5 md:gap-10  z-10 mx-auto md:h-[200px]  h-[100px] bg-slate-100/10 rounded-xl md:rounded-3xl flex md:p-5 p-2'>
                    <Image src={imgUrl} alt={title} height={24} width={24} className='rounded-2xl w-[80px] md:w-[180px] h-full  object-cover' />
                    <div className="w-full flex justify-between items-center">
                        <div className="flex-1 md:ml-[62px] flex flex-col ">
                            <h4 className=" lg:text-[28px] font-semibold text-[8px] text-white">
                                {title}
                            </h4>
                            <p className="mt-[16px] font-normal lg:text-[16px] text-[8px] text-secondary-white">
                                {subheading}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NewsCard
