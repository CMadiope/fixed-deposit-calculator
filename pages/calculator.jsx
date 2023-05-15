import React,{useState} from "react";
import Amount from "../components/Amount";

const Calculator = () => {
  const [amount, setAmount] = useState(0)

  return (
    <div className='bg-[#d8d8d8] px-6 h-screen'>
      <h3 className='text-center text-2xl sm:text-4xl lg:text-5xl text-[#ed0025] pt-32 font-merriweather font-semibold'>
        Are you investing monthly?
      </h3>
      <p className='text-sm sm:text-lg py-4 text-justify text-gray-700 sm:px-20 md:px-24 lg:px-28'>
        You choose if and how much you want to invest monthly (min R1 000) and
        can{" "}
        <span className='px-2 font-bold'>
          increase, decrease, stop and restart
        </span>{" "}
        your contributions whenever you want to. No transaction fees and no
        penalties.
      </p>
      <Amount amount={amount} setAmount={setAmount} />
      <div className=''>
        <div className='bg-white flex justify-between items-center py-3 px-4'>
          <p className="text-gray-700">Monthly amount</p>
          <p className='text-[#ed0025] font-merriweather'>R{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
