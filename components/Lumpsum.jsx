import React from "react";
import Input from "./Input";

const Lumpsum = ({ lumpsum, setLumpsum }) => {
  return (
    <div>
      <div>
        <h3 className='text-center py-4 text-2xl sm:text-4xl lg:text-5xl text-[#ed0025] pt-32 font-merriweather font-semibold'>
          Are you investing a lump sum?
        </h3>
        <p className='text-gray-700 text-sm whitespace-normal text-justify px-5 md:px-20 lg:px-40 xl:px-60'>
          You can start investing with
          <span className='px-2 font-bold'>
            {" "}
            a monthly amount, a single lump sum amount, or both.
          </span>{" "}
          If you don’t want to invest monthly, you can start with a single lump
          sum of R50 000 or more.
        </p>
      </div>
      <Input
        label='R'
        min='0'
        max='500000'
        step='1000'
        value={lumpsum}
        setValue={setLumpsum}
      />
    </div>
  );
};

export default Lumpsum;
