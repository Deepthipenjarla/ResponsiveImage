import React from 'react';
import Ilustration from './ilustration/Ilustration';
import backgroundimg from './rectangle-1@2x.png';



function Banner() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: 'cover',
  };
  return (
    // <div className=" flex flex-col -mx-[24px]  items-center  rounded-none h-[381px] xl:h-[533px] lg:rounded-[40px] bg-[url(https://s3-alpha-sig.figma.com/img/8b99/8f26/42091bef618c8e50f365fc5f5bca433e?Expires=1699228800&Signature=cJgzxWhB8rJJs6Q~8xITWy6X4CqF5R80MIjGmLRMGRNJ4SnPZhNIMszF8cospwtDnzHf1x2SFbr7FVjVjczLEfTrInxC~1aYp3LVQsfmE3yJhhQCR4CJQqZfhqL03beRLceU-XjDnrdleToFQVjgpbG8r9X1zwOJRQcKsRKksTvVvgTrrTuqs6hO2yZCN3~LmuNvHjUutXnUDayZSO4SIu3w0zVwwuC~YCVtDSu42sYv7OdvPO7HJ1Y-ZggauCPewt2KTRnX5ID4pXk-ntbMhLlZ8MIMBPySNlVUffEon3K0gsFYWhzQXX~SGbyny4tfdMnV29tkyP-FIPwwMP~8cA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] relative  bg-cover  ">
    <div className='flex flex-col -mx-[24px]  items-center  rounded-none h-[381px] xl:h-[533px] lg:rounded-[40px] relative' style={backgroundImageStyle}>
      <div className=' text-[32px] w-[303px] lg:text-[40px] xl:w-[411px] text-white xl:text-[64px] mainTitle  absolute top-[32px] left-[24px] lg:top-[60px] lg:left-[60px] '>
        Unveiling the  
        Wonders of 
        the Universe 
      </div>
      <div className=' relative top-[176px] lg:absolute lg:right-0 lg:top-0'>
        <Ilustration />
      </div>
  
    </div>
  );
}

export default Banner;
