import React, { useState } from "react";
import Amount from "../components/Amount";
import Carousel, { CarouselItem } from "../components/Motion/Carousel";
import Increase from "../components/Increase";
import Lumpsum from "../components/Lumpsum";
import Years from "../components/Years";
import Objective from "../components/Objective";
import Graph from "../components/Graph";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [lumpsum, setLumpsum] = useState(0);
  const [years, setYears] = useState(0);
  const [investmentObjective, setInvestmentObjective] = useState("");

  return (
    <div className='bg-[#d8d8d8] px-6 min-h-screen '>
      <Carousel >
        <CarouselItem>
          <Amount amount={amount} setAmount={setAmount} />
        </CarouselItem>
        <CarouselItem>
          <Increase increase={increase} setIncrease={setIncrease} />
        </CarouselItem>
        <CarouselItem>
          <Lumpsum lumpsum={lumpsum} setLumpsum={setLumpsum} />
        </CarouselItem>
        <CarouselItem>
          <Years years={years} setYears={setYears} />
        </CarouselItem>
        <CarouselItem>
          <Objective
            investmentObjective={investmentObjective}
            setInvestmentObjective={setInvestmentObjective}
          />
        </CarouselItem>
        <CarouselItem>
          <Graph/>
        </CarouselItem>
      </Carousel>
      <div className='pb-16 grid sm:grid-cols-3 sm:gap-5 md:grid-cols-4'>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className='text-gray-700'>Monthly amount</p>
          <p className='text-[#ed0025] font-merriweather'>R{amount}</p>
        </div>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className='text-gray-700'>Yearly increase</p>
          <p className='text-[#ed0025] font-merriweather'>{increase}%</p>
        </div>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className='text-gray-700'>Lump sum</p>
          <p className='text-[#ed0025] font-merriweather'>R{lumpsum}</p>
        </div>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className='text-gray-700'>Years invested</p>
          <p className='text-[#ed0025] font-merriweather'>{years}</p>
        </div>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className='text-gray-700'>Investment objective</p>
          <p className='text-[#ed0025] font-merriweather text-right text-[14px]'>
            {investmentObjective}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
