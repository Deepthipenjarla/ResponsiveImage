import React, { useEffect, useState } from 'react';






function SpaceWalks() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
  
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 1024);
    };

  
    checkScreenSize();

   
    window.addEventListener('resize', checkScreenSize);

    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  const svgWidth1 =  isLargeScreen ? '95' : '191'

  const svgHeight1 = isLargeScreen ? '49' : '99'


  const svgSize2 =  isLargeScreen ? '47' : '95'



  return (
    <div className='ilustrCards gap-[10px] p-[10px] w-[172px] h-[117px] lg:w-[255px] xl:w-[337px] lg:h-[199px] bg-white lg:gap-[28px] lg:p-5  -right-[17px] lg:-right-20 bottom-[88px] lg:bottom-[160px]'>
      <div className='flex items-center gap-[12px] lg:gap-5 normalText'>
        <div className='flex justify-center items-center bg-[#A9C2CB] w-10 h-10 rounded-[12px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <g filter="url(#filter0_d_1_138)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9872 3.19744C22.9158 3.98955 26.0104 7.08418 26.8025 11.0128C27.0209 12.0955 26.1046 13 25 13H19C17.8954 13 17 12.1046 17 11V4.99999C17 3.89542 17.9045 2.97913 18.9872 3.19744ZM7 14C7 9.19722 10.762 5.2731 15.5 5.01366V11C15.5 12.933 17.067 14.5 19 14.5H24.9863C24.7269 19.238 20.8028 23 16 23C11.0294 23 7 18.9706 7 14Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_138" x="0" y="0.165039" width="33.835" height="33.835" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_138"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_138" result="shape"/>
      </filter>
    </defs>
          </svg>
        </div>
        <div>Spacewalks</div>
      </div>
     
      <div className='flex  gap-[8px] lg:gap-[11px]'>
        <svg xmlns="http://www.w3.org/2000/svg"  width={svgWidth1} height={svgHeight1} viewBox="0 0 191 99" fill="none">
    <g clip-path="url(#clip0_1_108)">
      <path d="M190.33 0.550049H0.5V97.91H190.33V0.550049Z" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M19.8199 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M41.86 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M63.91 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M85.95 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M107.99 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M130.04 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M152.08 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M174.12 0.550049V97.91" stroke="#A9C2CB" stroke-miterlimit="10"/>
      <path d="M190.33 0.550049H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 14.46H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 28.37H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 42.28H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 56.1899H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 70.09H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 84H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M190.33 97.91H0.5" stroke="#A9C2CB" stroke-width="1.11" stroke-miterlimit="10"/>
      <path d="M174.12 27.53H129.96L86.16 42.08L63.5599 83.61L41.8799 56.1L19.8199 83.61" stroke="url(#paint0_linear_1_108)" stroke-miterlimit="10"/>
      <path d="M22.65 83.6C22.65 84.1597 22.484 84.7069 22.1731 85.1723C21.8621 85.6377 21.4201 86.0004 20.903 86.2146C20.3859 86.4288 19.8168 86.4848 19.2679 86.3756C18.7189 86.2664 18.2147 85.9969 17.8189 85.6011C17.4231 85.2053 17.1536 84.7011 17.0444 84.1521C16.9352 83.6031 16.9912 83.0341 17.2054 82.517C17.4196 81.9999 17.7823 81.5579 18.2477 81.2469C18.7131 80.936 19.2603 80.77 19.82 80.77C20.5706 80.77 21.2904 81.0682 21.8211 81.5989C22.3518 82.1296 22.65 82.8494 22.65 83.6Z" fill="url(#paint1_linear_1_108)"/>
      <path d="M41.8801 58.94C43.443 58.94 44.71 57.673 44.71 56.11C44.71 54.5471 43.443 53.28 41.8801 53.28C40.3171 53.28 39.05 54.5471 39.05 56.11C39.05 57.673 40.3171 58.94 41.8801 58.94Z" fill="url(#paint2_linear_1_108)"/>
      <path d="M66.3999 83.6C66.4019 84.1626 66.2368 84.713 65.9255 85.1816C65.6142 85.6502 65.1708 86.0157 64.6514 86.2319C64.1321 86.4481 63.5602 86.5052 63.0084 86.3959C62.4565 86.2867 61.9496 86.016 61.5518 85.6182C61.154 85.2204 60.8833 84.7134 60.7741 84.1616C60.6648 83.6098 60.7219 83.0379 60.9381 82.5186C61.1543 81.9992 61.5198 81.5558 61.9884 81.2445C62.4569 80.9332 63.0074 80.7681 63.57 80.77C64.3197 80.7727 65.038 81.0717 65.5682 81.6018C66.0983 82.132 66.3973 82.8503 66.3999 83.6Z" fill="url(#paint3_linear_1_108)"/>
      <path d="M88.99 42.08C88.99 42.6398 88.824 43.1869 88.513 43.6523C88.2021 44.1177 87.7601 44.4804 87.243 44.6946C86.7259 44.9088 86.1568 44.9648 85.6079 44.8556C85.0589 44.7464 84.5547 44.4769 84.1589 44.0811C83.7631 43.6854 83.4935 43.1811 83.3843 42.6321C83.2751 42.0832 83.3312 41.5141 83.5454 40.997C83.7596 40.4799 84.1223 40.0379 84.5877 39.727C85.0531 39.416 85.6002 39.25 86.16 39.25C86.532 39.2487 86.9006 39.321 87.2445 39.4628C87.5885 39.6045 87.901 39.8129 88.164 40.076C88.4271 40.339 88.6355 40.6515 88.7772 40.9955C88.919 41.3394 88.9913 41.708 88.99 42.08Z" fill="url(#paint4_linear_1_108)"/>
      <path d="M129.96 30.36C131.523 30.36 132.79 29.0929 132.79 27.53C132.79 25.967 131.523 24.7 129.96 24.7C128.397 24.7 127.13 25.967 127.13 27.53C127.13 29.0929 128.397 30.36 129.96 30.36Z" fill="url(#paint5_linear_1_108)"/>
      <path d="M176.96 27.53C176.962 28.0938 176.796 28.6454 176.483 29.1146C176.171 29.5838 175.725 29.9493 175.204 30.1646C174.683 30.3798 174.11 30.4351 173.557 30.3234C173.005 30.2116 172.498 29.9379 172.101 29.5371C171.705 29.1364 171.436 28.6266 171.331 28.0728C171.225 27.519 171.286 26.9462 171.507 26.4275C171.728 25.9087 172.098 25.4674 172.57 25.1597C173.043 24.8521 173.596 24.6921 174.16 24.7C174.905 24.7105 175.615 25.0129 176.139 25.5422C176.663 26.0716 176.957 26.7854 176.96 27.53Z" fill="url(#paint6_linear_1_108)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_1_108" x1="19.4299" y1="55.77" x2="174.12" y2="55.77" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_108" x1="16.99" y1="83.61" x2="22.65" y2="83.61" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1_108" x1="39.05" y1="56.11" x2="44.71" y2="56.11" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint3_linear_1_108" x1="60.73" y1="83.61" x2="66.3999" y2="83.61" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A9C2CB"/>
        <stop offset="0.0001" stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint4_linear_1_108" x1="83.33" y1="42.08" x2="88.99" y2="42.08" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint5_linear_1_108" x1="127.12" y1="27.53" x2="132.79" y2="27.53" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <linearGradient id="paint6_linear_1_108" x1="171.29" y1="27.53" x2="176.96" y2="27.53" gradientUnits="userSpaceOnUse">
        <stop stop-color="#171E27"/>
        <stop offset="1" stop-color="#A9C2CB"/>
      </linearGradient>
      <clipPath id="clip0_1_108">
        <rect width="190.83" height="98.47" fill="white"/>
      </clipPath>
    </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width={svgSize2} height={svgSize2} viewBox="0 0 95 95" fill="none">
  <g clip-path="url(#clip0_1_133)">
    <path d="M47.49 47.36L2.48999 32.73C5.47431 23.1611 11.4639 14.8091 19.57 8.91321C27.6762 3.01733 37.467 -0.108301 47.49 3.86862e-05V47.36Z" fill="#171E27" fill-opacity="0.6"/>
    <path d="M47.4899 47.36L75.3299 85.67C65.168 93.0519 52.49 96.0948 40.0846 94.1295C27.6791 92.1641 16.5625 85.3514 9.17995 75.19C4.67975 69.1984 1.71454 62.1964 0.54317 54.7951C-0.628202 47.3939 0.0298738 39.8184 2.45995 32.73L47.4899 47.36Z" fill="#171E27" fill-opacity="0.8"/>
    <path d="M47.49 47.36L75.33 9.05005C80.3614 12.7045 84.6235 17.3145 87.8728 22.6165C91.1221 27.9186 93.295 33.8089 94.2673 39.951C95.2396 46.093 94.9922 52.3664 93.5394 58.4129C92.0866 64.4593 89.4567 70.1603 85.8 75.19C82.9116 79.2367 79.3739 82.7778 75.33 85.6701L47.49 47.36Z" fill="#A9C2CB" fill-opacity="0.6"/>
    <path d="M47.49 47.36V2.5345e-05C57.5089 -0.154417 67.2974 3.00999 75.33 9.00003L47.49 47.36Z" fill="#171E27" fill-opacity="0.2"/>
  </g>
  <defs>
    <clipPath id="clip0_1_133">
      <rect width="94.86" height="94.71" fill="white"/>
    </clipPath>
  </defs>
        </svg>
      </div>
    </div>
  );
}

export default SpaceWalks;
