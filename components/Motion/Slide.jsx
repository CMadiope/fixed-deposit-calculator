import React from "react";

const Slide = ({
  title,
  time,
  growth,
  setInvestmentObjective,
  id,
}) => {

  const handleClick= () => {
    setInvestmentObjective(id)
  }
  // console.log(investmentObjective);

  return (
    <div className=' hover:scale-105 whitespace-normal bg-white p-5 cursor-pointer rounded-md border-black' onClick={handleClick}>
      <h2 className='text-black/80 text-lg font-bold font-merriweather'>
        {title}
      </h2>
      <div className='flex flex-col text-sm gap-px'>
        <p>Investment time horizon</p>
        <p className='text-[#ed0025] text-lg font-semibold font-merriweather'>
          {time}
        </p>
      </div>

      <p className='text-[12px]'>Assumed investment growth: {growth}%</p>
    </div>
  );
};

export default Slide;
