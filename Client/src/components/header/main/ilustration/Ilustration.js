import React from 'react';
import TimeInSpace from './TimeInSpace';
import SpaceWalks from './SpaceWalks';
import Exercising from './Exercising';
import backgroundimg from './lostinspace3dcutegirlinastronautcostumetransparentbackgroundfreepng-1@2x.png'



function Ilustration() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundimg})`,
  };
  return (
    // <div className='  flex w-[294px] h-[414px] lg:h-[530px] xl:h-[767px] lg:w-[531px] xl:w-[767px] bg-[url(https://s3-alpha-sig.figma.com/img/3fb3/fa3b/b65916f7aba31f7c3b0dfd185840a24c?Expires=1699228800&Signature=bEzhjn29RAPdvmBqNmufW3WEKAHy3r2~7VnX3PpInMc~LUxrhjGD5AfPZ5caLxB8B0XMEKDjRlcv905G0tp6ErC68pPHZcXqn9GfyqD-od~JPVwImeGou4fH8tc7DQtagmqzNgu89ABrq4~Sfc2S4ndGc231WMMnOT9b0OcNZRugtLaoFvK2XZlwfkjJK35tv2GXHVgxpFtegi~adEeyGwZCyXpS287mqlQHNc~VknUEV1k0c4QXMzMSXP9XniZE3g3tzl8r16Pu4GYa7J9WZDirJ82GbYSdyGSNZta4G2zmvYCG9pIIsWb4~dCUhzMdBwh9XsiQ2llx2PUiauPm-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] scale-x-[-1]  bg-cover bg-center justify-center '>
    <div className='  flex w-[294px] h-[414px] lg:h-[530px] xl:h-[767px] lg:w-[531px] xl:w-[767px] scale-x-[-1]  bg-cover bg-center justify-center ' style={backgroundImageStyle}>
      <Exercising />
      <SpaceWalks />
      <TimeInSpace />
    </div>
  );
}

export default Ilustration;
