import React from 'react';
import img1 from './2560pxnasa-worm-logo-black-1@2x.png';
import img2 from './astroscale-main-logo-rgb-1@2x.png';
import img3 from './boeinglogo1960present-1@2x.png';
import img4 from './spacexlogo-1@2x.png';


function Logotipes() {
  return (
    <div className="grid grid-cols-2  gap-x-[20px]  justify-between  lg:flex  items-center">
      <img className=' h-fit lg:w-[197px] xl:w-[305px] lg:h-[204px] opacity-[0.35]' src={img4}alt='img1'></img>
      <img className=' m-auto lg:m-0 lg:w-[117px] xl:w-[114px] h-[31px] opacity-[0.35]' src={img1}alt='img2'></img>
      <img className='  lg:w-[206px] xl:w-[265px] h-[149px] opacity-[0.35]' src={img3}alt='img3'></img>
      <img className='lg:w-[117px] lg:h-[32px] xl:w-[320px] xl:h-[102px] opacity-[0.35]' src={img2}alt='img4'></img>

    </div>
  );
}

export default Logotipes;
