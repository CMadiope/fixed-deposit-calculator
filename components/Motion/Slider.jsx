import React, { useRef } from "react";
import Slide from "./Slide";
import { useSwipeable } from "react-swipeable";

const Slider = ({ setInvestmentObjective, investmentObjective }) => {

  

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4  overflow-hidden '>
      <Slide
        title='Higher growth Many ups and downs'
        time='more than five years'
        growth='10'
        setInvestmentObjective={setInvestmentObjective}
        investmentObjective={investmentObjective}
        id='Higher growth'
      />
      <Slide
        title='Steady growth Some ups & downs'
        time='more than 3 years'
        growth='9'
        setInvestmentObjective={setInvestmentObjective}
        investmentObjective={investmentObjective}
        id='Steady growth'
      />
      <Slide
        title='Lower growth Fewer ups and Downs'
        time='at least 2 years'
        growth='8'
        setInvestmentObjective={setInvestmentObjective}
        investmentObjective={investmentObjective}
        id='Lower growth'
      />
      <Slide
        title='Low growth Very few ups and Downs'
        time='approximately 1 year'
        growth='7'
        setInvestmentObjective={setInvestmentObjective}
        investmentObjective={investmentObjective}
        id='Low growth'
      />
    </div>
  );
};

export default Slider;
