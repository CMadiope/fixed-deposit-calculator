import React from "react";
import Input from "./Input";

const Amount = ({ amount, setAmount }) => {
  return (
    <div className='pt-8 px-6'>
      <div className='pb-8'>
        <h3 className='text-center py-4 text-2xl sm:text-4xl lg:text-5xl text-[#ed0025] pt-32 font-merriweather font-semibold'>
          Are you investing monthly?
        </h3>
        <p className='text-gray-700 text-sm whitespace-normal text-justify px-5 md:px-20 lg:px-40 xl:px-60'>
          You choose if and how much you want to invest monthly (min R1 000) and
          can{" "}
          <span className='px-2 font-bold'>
            increase, decrease, stop and restart
          </span>{" "}
          your contributions whenever you want to. No transaction fees and no
          penalties.
        </p>
      </div>
      <Input
        label='R'
        min='0'
        step='50'
        max='5000'
        value={amount}
        setValue={setAmount}
      />
    </div>
  );
};

export default Amount;
