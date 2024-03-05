import React from 'react';


function ResourceCard({number , title , text}) {
  return (
    <div className="flex flex-col gap-[16px] w-[327px] h-[258px] lg:w-[267px] lg:h-[282px] xl:w-[452px] xl:h-[434px] rounded-[24px] shadow-[0px_20px_39px_-12px] p-[24px] xl:p-[52px] lg:gap-[16px] xl:gap-[30px] bg-white">
      <div className='flex flex-col  xl:gap-[10px]'>
        <div className='text-[#A9C2CB] text-[32px] xl:text-[64px] items-center xl:leading-[90px] font-extrabold'>{number}</div>
        <div className='title  text-[18px] xl:text-[24px]'>{title}</div>
      </div>
      <div className=' leading-[24px]  text-[14px] xl:text-[18px] lg:leading-normal xl:leading-[33px] '>
        {text}
      </div>
    </div>
  );
}

export default ResourceCard;
