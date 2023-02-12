import React, { useState } from 'react';

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  // destructure accordion
  const { question, answer } = accordion;
  return (
    <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer'>
      <div className='bg-white border rounded-sm'>
        <div className='min-h-[68px] flex items-center justify-between px-[30px]'>
          <h6 className='text-[18px] leading-[28px] font-poppins font-bold'>{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className='text-[20px] text-neutral-500' />
            ) : (
              <FaChevronCircleDown className='text-[20px] text-neutral-500' />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'min-h-[300px] lg:min-h-[160px]' : 'min-h-0'
          } max-h-0 overflow-hidden flex justify-center transition-all px-[30px]`}
        >
          <div className='font-poppins mt-6'>{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;