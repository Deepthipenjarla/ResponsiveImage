import React from 'react';




function MainInfo() {
  return (
    <div className="flex flex-col mt-[322px] lg:mt-0 ">
      <div className='my-10 w-full  lg:w-[395px] xl:w-[701px] normalText ' >
        At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. 
      </div>
      <div className='flex flex-col items-start gap-[39px] lg:flex-row lg:gap-[24px] xl:gap-[77px] lg:items-center '>
        <button className='button bg-[#0D0F12] px-[40px] py-[20px] xl:px-[54px] xl:py-[26px] text-2xl leading-normal font-semibold'>Get Started</button>
        <div className='flex gap-5'>
          <a className='text-2xl leading-normal font-semibold '>Watch the Video</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <rect width="40" height="40" rx="12" fill="#A9C2CB"/>
  <g filter="url(#filter0_d_1_29)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.0058C10 14.4863 14.4884 10 20 10C25.5116 10 30 14.4863 30 20.0058C30 25.5137 25.5116 30 20 30C14.4884 30 10 25.5137 10 20.0058ZM23.668 21.0178C23.7741 20.9117 23.9093 20.7477 23.9382 20.7091C24.0927 20.5065 24.1699 20.2557 24.1699 20.0058C24.1699 19.725 24.083 19.4645 23.9189 19.2523C23.9055 19.2388 23.8791 19.2102 23.8448 19.1728C23.7806 19.103 23.6885 19.0026 23.6004 18.9146C22.8089 18.0656 20.7432 16.6763 19.6622 16.2518C19.4981 16.1852 19.083 16.0396 18.861 16.0299C18.6486 16.0299 18.4459 16.0781 18.2529 16.1746C18.0116 16.3097 17.8185 16.5219 17.7124 16.7728C17.6448 16.9465 17.5386 17.4674 17.5386 17.4771C17.4324 18.0463 17.3745 18.9725 17.3745 19.9952C17.3745 20.9706 17.4324 21.8572 17.5193 22.4361C17.5217 22.4385 17.53 22.4799 17.5429 22.5442C17.5821 22.7397 17.6638 23.1471 17.751 23.314C17.9633 23.7192 18.3784 23.9701 18.8224 23.9701H18.861C19.1506 23.9604 19.7587 23.7096 19.7587 23.7C20.7819 23.2754 22.7992 21.9537 23.61 21.0757L23.668 21.0178Z" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_d_1_29" x="3" y="7" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="3.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_29"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_29" result="shape"/>
    </filter>
  </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
