import React from 'react'

const Amount = ({amount,setAmount}) => {
  return (
    <div className='pt-8'>
      {/* <h3 className='font-merriweather text-center pb-4 text-4xl text-[#ed0025] font-bold'>
        R{amount}
      </h3> */}
      <div className='flex  pb-4 text-4xl pl-[40%] md:text-5xl lg:text-7xl'>
        <label
          className='text-center text-[#ed0025] font-merriweather font-bold'
          htmlFor='#number'
        >
          R
        </label>
        <input
          className='bg-transparent outline-none focus:outline-none  font-merriweather placeholder:R0 text-[#ed0025] font-bold'
          type='text'
          id='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className='flex justify-center'>
        <input
          className='w-full ss:mx-10 md:mx-32 lg:mx-52 text-[#ed0025]'
          type='range'
          value={amount}
          min='0'
          step='50'
          max='5000'
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className='my-5 text-white bg-[#ed0025] text-center cursor-pointer group sm:w-60 sm:ml-[40%]'>
        <button className='w-full py-2 px-6 text-lg shadow-2xl group-hover:shadow-none text-center'>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Amount