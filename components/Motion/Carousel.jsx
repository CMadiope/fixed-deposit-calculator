import React, { useState } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className='inline-flex items-center justify-center  '
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='overflow-hidden pt-0 min-h-screen'>
      <div
        className='whitespace-nowrap transition ease-in-out delay-150 duration-300'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className='flex justify-center py-8 sm:px-28 md:px-38 lg:px-52'>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className={`w-[50%] py-2 flex-1 px-6 text-blue-500  text-lg shadow-2xl group-hover:shadow-none text-center
          ${activeIndex === 0 ? "hidden" : "block"}
          `}
        >
          Previous
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className={`'w-full py-2 px-6 text-white  text-lg shadow-2xl group-hover:shadow-none text-center bg-[#ed0025] '
          ${activeIndex === 0 ? "w-full" : "w-[50%]"}
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Carousel;
