import React from 'react';
import backgroundimg from './rectangle-504@2x.png';


function Join() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: 'cover',
  };
  return (
    // <div className=" -mx-[24px] px-[24px] py-[40px] lg:p-[120px]  lg:h-[533px] mt-[827px]  lg:mt-[244px] xl:mt-[408px] flex flex-col gap-[48px] bg-[url(https://s3-alpha-sig.figma.com/img/264f/dbd7/8d3519c9e55aa8b1c85e4d73c59a6638?Expires=1699228800&Signature=fd7LyGJwye4AZ2KmW7er7f6~YEIfbe3-NC7dq5SzuLaPZRY1EW4JkMtVZ37icON8KtzsO38X3zQw8mB4B1NEbZ12DjYbwGVtukitGTf9sZizlVDAsg49~06pAc4L0xTFR29mBQBJSlEDFRtOxTAE5i993mDg03hiIaDRAojMAjuV0I1-o3CRyOLjPA66L-t4peTKUEUCdRLcYnuHEcJh0QbHuW6TQkqXIcDHTKBN0ZCwWJPtcrBNryOdaDaHaxLlCilaf6kApBib1lL4IJPpz8QRv-u-060pubTEIKU4IJ2k5LGkrQoYxcoRz9LfoyC-EGM3Sgdtd4NrNQ4et9ADJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] bg-cover lg:rounded-[40px] text-white ">
    <div className=" -mx-[24px] px-[24px] py-[40px] lg:p-[120px]  lg:h-[533px] mt-[827px]  lg:mt-[244px] xl:mt-[408px] flex flex-col gap-[48px] bg-cover lg:rounded-[40px] text-white " style={backgroundImageStyle}>
      <div className='flex flex-col gap-[12px]'>
        <div className='mainTitle text-[40px] xl:text-[64px]'>Join our community</div>
        <div className='w-[327px]  lg:w-[398px]  xl:w-[735px] normalText text-[14px] xl:text-[18px]'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</div>
      </div>
      
      <div className='flex flex-col lg:glex-row lg:flex-row gap-[24px]'>
        <input className='py-[22px] px-[24px] lg:w-[416px] xl:w-[649px] lg:px-[32px] lg:py-[26px] rounded-[24px] text-[24px] font-medium' placeholder='Enter your email'></input>
        <button className='px-[40px] xl:px-[54px] py-[20px] xl:py-[26px] bg-[#A9C2CB] flex justify-center items-center text-white rounded-[20px] shadow-[0px_19px_45px_-10px] text-[24px] shadow-black'>Subscribe</button>
      </div>
    </div>
  );
}

export default Join;
