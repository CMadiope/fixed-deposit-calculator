import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='pt-2 pb-4 w-full'>
      <div
        onClick={toggle}
        className='cursor-pointer font-medium flex items-center justify-between'
      >
        <h3 className='text-xl font-merriweather'>{props.label}</h3>
        <div>
          {open ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
        </div>
      </div>
      {open && <div className={`p-4 `}>{props.children}</div>}
    </div>
  );
};

export default DropDown;
