import React from "react";
import Input from "./Input";

const Increase = ({ increase, setIncrease }) => {
  return (
    <div>
      <div>
        <h3 className='text-center py-4 text-2xl sm:text-3xl lg:text-4xl text-[#ed0025] pt-28 font-merriweather font-semibold whitespace-normal sm:px-20 md:px-28'>
          By how much will you increase your monthly contributions each year?
        </h3>
        <p className='text-gray-700 text-sm whitespace-normal text-justify px-5 md:px-20 lg:px-40 xl:px-60'>
          Consider increasing your contributions each year to
          <span className='px-2 font-bold'>
            {" "}
            at least keep up with inflation{" "}
          </span>{" "}
          (i.e. the rising cost of goods and services over time).
        </p>
      </div>
      <Input
        secondLabel='%'
        min='0'
        max='20'
        step='1'
        value={increase}
        setValue={setIncrease}
      />
    </div>
  );
};

export default Increase;
