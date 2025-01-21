import React from 'react'
import Image from 'next/image'

type Props = {
  imgUrl: string,
  name: string,
  role:string

}
const TeamCard = ({  imgUrl, name,role }: Props) => {
  return (
  <div className='w-full h-[300px] relative rounded-[30px]'>
<Image src={imgUrl} alt={name} height={1000} className='object-cover h-full w-full rounded-[30px]' width={1000}/>
<div className=' bg-[rgba(0,0,0,0.5)] flex-start absolute bottom-0 p-8 w-full'>
    <h1 className='font-semibold text-white'>{name}</h1>
    <h3 className='font-normal text-white'>{role}</h3>
</div>
  </div>
  )
}

export default TeamCard
