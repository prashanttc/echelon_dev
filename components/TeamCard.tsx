import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'

type Props = {
  imgUrl: string,
  name: string,
  id: string,
  handleclick: (id: string) => void,
  active: string,
  index: number,
  role:string
}
const TeamCard = ({ role,index, active, handleclick, imgUrl, name, id }: Props) => {
  return (
  <>  
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.5)} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.2] flex-[2]'} flex items-center justify-center min-w-[100px] h-[700px] transition-[flex] rounded-3xl ease-out-flex cursor-pointer text-white`} onClick={() => handleclick(id)}>
      <Image src={imgUrl} alt={name} height={1000} width={1000} className='h-full w-full rounded-3xl absolute object-cover' />
      {active !== id ? (
        <h3 className='font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>{name}</h3>
      ) : (
        <div className='absolute flex-start bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] '>
          <div className='mb-[16px] glassmorphism flex items-center w-[60px] rounded-[24px] h-[60px] justify-center'>
            <Image src='/headset.svg' alt='image' height={24} width={24} className='w-1/2 h-1/2 object-contain' />
          </div>
          <h2 className='mt-[24px] text-[24px] font-semibold sm:text-[32px] text-white'>{name}</h2>
          <p className='font-normal text-[16px] leading-[20px] text-white uppercase '>{role}</p>
        </div>

      )}
    </motion.div></>

  )
}

export default TeamCard
