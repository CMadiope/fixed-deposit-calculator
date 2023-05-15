import React, { useState } from "react";
import { AiOutlineMenu, AiFillPhone, AiOutlineSearch } from "react-icons/ai";
import logo from "../public/grey_ag_logo-1.svg";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import DropDown from "./DropDown";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='font-roboto relative '>
      <div className='p-5 sm:px-8 sm:py-8 md:px-16 lg:px-20 flex justify-between items-center'>
        <div>
          <div
            className='text-2xl sm:hidden cursor-pointer relative z-20'
            onClick={handleNav}
          >
            {nav ? <RxCross1 className='text-white' /> : <AiOutlineMenu />}
          </div>
          <Link
            href='/'
            className='w-[110px] sm:w-[120px] md:w-[140px] hidden sm:block'
          >
            <Image src={logo} alt='logo' />
          </Link>
        </div>
        <div className='hidden sm:flex gap-3 text-[#6d6e71] items-center font-merriweather  md:text-base  lg:text-lg '>
          <Link href='#' className='hover:text-red-500'>
            What we offer
          </Link>
          <Link href='#' className='hover:text-red-500'>
            News & Insights
          </Link>
          <Link href='#' className='hover:text-red-500'>
            About us
          </Link>
        </div>
        <div className='flex'>
          <Link href='/' className='w-[110px] sm:hidden'>
            <Image src={logo} alt='logo' />
          </Link>
          <div className='hidden sm:flex justify-between items-center'>
            <div className='flex  gap-3 lg:gap-6 text-[#6d6e71] items-center text-base '>
              <AiFillPhone size={20} />
              <AiOutlineSearch size={20} />
              <div className='py-1 px-3 bg-[#6d6e71]/80 text-white'>Log in</div>
              <div className='py-1 px-3 bg-red-500 text-white '>Invest now</div>
            </div>
          </div>
        </div>
      </div>
      {nav && (
        <div
          className={
            nav
              ? "overflow-y-hidden md:hidden ease-in duration-500 absolute text-gray-300 left-0 top-0 w-[80%] h-screen bg-[#313537] px-4 py-7 sm:hidden flex flex-col z-10"
              : "absolute top-0 h-screen left-[-100%] ease-out duration-500"
          }
        >
          <div className='py-10 pl-2'>
            <DropDown label='What we offer'>
              <p>Unit trust investments</p>
              <p>Group savings</p>
              <p>Useful resources</p>
            </DropDown>
            <DropDown label='News & insights'>
              <p>Latest insights</p>
              <p>Literature library</p>
            </DropDown>
            <DropDown label='About us'>
              <p>Our values</p>
              <p>Our people</p>
              <p>Our track record</p>
              <p>Our ownership</p>
            </DropDown>
          </div>
          <div className="flex flex-col gap-4 pl-4">
            <p>Invest now</p>
            <p>Search</p>
            <p>Contact</p>
            <p>Log in</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
