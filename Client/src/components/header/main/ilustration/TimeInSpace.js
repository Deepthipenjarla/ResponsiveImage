import React from 'react';






function TimeInSpace() {
  return (
    <div className='ilustrCards gap-[5px] p-[12px] w-[318px] h-[88px] lg:p-[20px] lg:gap-[28px] lg:w-[408px] xl:w-[464px] lg:h-[130px]  bg-[#020502]  text-white -bottom-[80px] lg:-bottom-[90px]  '>
      <div className='flex items-center gap-5 normalText'>
        <div className='flex justify-center items-center bg-[#A9C2CB] w-10 h-10 rounded-[12px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="34" viewBox="0 0 32 34" fill="none">
    <g filter="url(#filter0_d_1_66)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2041 5.13575C14.092 4.88462 15.0297 4.75 16 4.75C16.9703 4.75 17.908 4.88462 18.7959 5.13575C19.1945 5.24849 19.609 5.01676 19.7217 4.61818C19.8344 4.21961 19.6027 3.80511 19.2041 3.69238C18.1847 3.40405 17.1097 3.25 16 3.25C14.8903 3.25 13.8153 3.40405 12.7959 3.69238C12.3973 3.80511 12.1656 4.21961 12.2783 4.61818C12.391 5.01676 12.8055 5.24849 13.2041 5.13575ZM24.5 14.5C24.5 19.1944 20.6944 23 16 23C11.3056 23 7.5 19.1944 7.5 14.5C7.5 9.80558 11.3056 6 16 6C20.6944 6 24.5 9.80558 24.5 14.5ZM16.75 10C16.75 9.58579 16.4142 9.25 16 9.25C15.5858 9.25 15.25 9.58579 15.25 10V13.7007C14.8016 13.96 14.5 14.4448 14.5 15C14.5 15.8284 15.1716 16.5 16 16.5C16.8284 16.5 17.5 15.8284 17.5 15C17.5 14.4448 17.1984 13.96 16.75 13.7007V10Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_66" x="0.5" y="0.25" width="31" height="33.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_66"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_66" result="shape"/>
      </filter>
    </defs>
          </svg>
        </div>
        <div>Total time in space </div>
      </div>
      <div className='flex justify-end tracking-[8px] text-base lg:text-xl xl:text-2xl leading-normal font-extrabold lg:tracking-[10px] xl:tracking-[12px]'>352D 5H 49M 20S</div>
    </div>
  );
}

export default TimeInSpace;
