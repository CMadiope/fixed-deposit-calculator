import React from "react";
import welcome from "../public/welcome3-landscape.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";

const FirstPage = () => {
  const router = useRouter();

  return (
    <div className='w-full flex flex-col md:flex-row py-16 px-6 font-merriweather gap-10'>
      <div>
        <h1 className='text-[#ed0025] text-4xl sm:text-5xl font-bold'>
          See what your investment could be worth
        </h1>
        <h3 className='text-xl text-gray-500 font-roboto py-8'>
          Investment values change all the time. Do you know what yours could
          grow to?
        </h3>
        <div
          className='font-roboto text-center shadow-[#ed0025] drop-shadow-2xl sm:w-52 cursor-pointer'
          onClick={() => router.push("/calculator")}
        >
          <button className='py-2 text-lg px-6 bg-[#ed0025] text-white w-full  '>
            Find out now
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image src={welcome} alt='heroImg' className='w-full' />
        <span className='bg-[#ed0025]/50 absolute bottom-0 top-0 left-3 w-[102px]'></span>
      </div>
    </div>
  );
};

export default FirstPage;
