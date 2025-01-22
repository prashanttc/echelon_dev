'use client';

import { socials } from '../constants';
import Image from 'next/image';

const Footer = () => (
  <footer className='padding mx-auto   flex items-cente justify-center py-8 relative'
  >
    <div className="footer-gradient" />
    <div className='inner-width x-auto flex flex-col gap-8'>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold hidden md:block  text-[12px] md:text-[24px] text-white">
            echelon dev society
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
cdgi ,indore          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Image
              width={1000}
              height={1000}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;