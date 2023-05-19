import React from "react";
import Slider from "./Motion/Slider";

const Objective = ({ investmentObjective, setInvestmentObjective }) => {
  return (
    <div>
      <div className="py-8">
        <h3 className='text-center py-4 text-2xl sm:text-4xl lg:text-5xl text-[#ed0025] pt-32 font-merriweather font-semibold whitespace-normal'>
          What is your investment objective?
        </h3>
        <p className='text-gray-700 text-sm whitespace-normal text-justify px-5 md:px-20 lg:px-40 xl:px-60'>
          Your investment growth comes from the unit trust(s) you are invested
          in. Remember that investment returns don’t come in a straight line.
          This means that the value of your investment may go up and down, which
          is known as fluctuation.
        </p>
      </div>
      <Slider
        setInvestmentObjective={setInvestmentObjective}
        investmentObjective={investmentObjective}
      />
      
    </div>
  );
};

export default Objective;
