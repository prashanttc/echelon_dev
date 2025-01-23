"use client";
import { useState } from "react";
import { Sheet } from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SheetTrigger, SheetContent } from "../ui/sheet";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="py-5 w-full z-20  bg-black px-6 sm:px-16 fixed">
      <div className="absolute w-[50%] inset-0 gradient-01 " />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <Link href="#home">
          <h2 className="font-bold text-[24px] leading-[30px] cursor-pointer z-10 text-white">
            EDS
          </h2>
        </Link>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Image
              src="/menu.svg"
              height={24}
              width={24}
              alt="menu"
              className="object-contain w-[24px] h-[24px] md:hidden"
            />
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <div className="flex flex-col gap-10 items-center justify-center mt-20 cursor-pointer">
              <Link
                href="#about"
                className="text-white font-semibold text-[24px]"
                onClick={closeSheet}
              >
                About
              </Link>
              <Link
                href="#explore"
                className="text-white font-semibold text-[24px]"
                onClick={closeSheet}
              >
                Team
              </Link>
              <Link
                href="#news"
                className="text-white font-semibold text-[24px]"
                onClick={closeSheet}
              >
                News
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex gap-10 text-white cursor-pointer">
          <Link href="#about">About</Link>
          <Link href="#explore">Team</Link>
          <Link href="#news">News</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
