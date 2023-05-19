import React from "react";
import Input from "./Input";

const Years = ({ years, setYears }) => {
  return (
    <div>
      <div>
        <h3 className='text-center py-4 text-2xl sm:text-4xl lg:text-5xl text-[#ed0025] pt-32 font-merriweather font-semibold whitespace-normal'>
          How many years do you plan to invest for?
        </h3>
        <p className='text-gray-700 text-sm whitespace-normal text-justify px-5 md:px-20 lg:px-40 xl:px-60'>
          Long-term wealth creation requires patience. The longer you leave your
          money invested for, the more time it has to grow.
        </p>
      </div>
      <Input
        secondLabel='years'
        min='1'
        max='40'
        step='1'
        value={years}
        setValue={setYears}
      />
    </div>
  );
};

export default Years;
