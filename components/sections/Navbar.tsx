'use client';
import { Sheet } from "../ui/sheet";
import Image from "next/image"
import Link from 'next/link';
import { SheetTrigger, SheetContent } from "../ui/sheet";
const Navbar = () => {
  return (
    <div className="py-5 w-full z-20 -ml-[40px] bg-black px-6 sm:px-16 fixed">
      <div className="absolute w-[50%] inset-0 gradient-01 " />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8   ">
        <Link href='#home'>
          <h2 className='font-bold text-[24px] leading-[30px] cursor-pointer z-10 text-white'>Echelon</h2>
        </Link>
        <Sheet>
          <SheetTrigger><Image src='/menu.svg' height={24} width={24} alt='menu' className='object-contain w-[24px] h-[24px] md:hidden' />
          </SheetTrigger>
          <SheetContent className="bg-black">
        <div className="flex flex-col gap-10 items-center justify-center mt-12 cursor-pointer">
        <Link href='#about' className="text-white font-semibold text-[24px]">About</Link>
          <Link href='#explore' className="text-white font-semibold text-[24px]">Team</Link>
          <Link href='#news' className="text-white font-semibold text-[24px]">News</Link>
        </div>
          </SheetContent>
        </Sheet>

        <div className='hidden md:flex gap-10 text-white cursor-pointer'>
          <Link href='#about'>About</Link>
          <Link href='#explore'>Team</Link>
          <Link href='#news'>News</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
