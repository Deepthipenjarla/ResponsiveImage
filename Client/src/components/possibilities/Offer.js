import React from 'react';



function Offer({icon , title , text }) {
  return (
    <div className=" flex flex-col gap-[10px]">
      <div className='flex flex-col gap-5'>
        <div className='w-[100px] h-[100px] bg-[#A9C2CB] rounded-[24px] flex justify-center items-center '>{icon}</div>
        <div className='title'>{title}</div>
      </div>
      <div className='w-[336px]  normalText  lg:text-[14px] xl:text-[18px]'>
        {text}
      </div>
    </div>
  );
}

export default Offer;
