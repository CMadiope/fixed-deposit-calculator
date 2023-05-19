import React from "react";

const Input = (props) => {
  return (
    <div className="pt-0">
      <div className='flex  pb-4 text-4xl pl-[40%] md:text-5xl lg:text-7xl pt-10 relative '>
        <label className='text-center text-[#ed0025] font-merriweather font-bold'>
          {props.label}
        </label>

        <input
          className={` bg-transparent outline-none focus:outline-none  font-merriweather placeholder:R0 text-[#ed0025] font-bold
          
          `}
          type='number'
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
        <label className='text-center text-[#ed0025] font-merriweather font-bold absolute right-[28%] sm:right-[40%] md:right-[32%]'>
          {props?.secondLabel}
        </label>
      </div>
      <div className='flex justify-center '>
        <input
          className='w-[90%] ss:mx-10 md:mx-32 lg:mx-52 text-[#ed0025]'
          type='range'
          value={props.value}
          min={props.min}
          step={props.step}
          max={props.max}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
