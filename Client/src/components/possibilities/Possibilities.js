import React from 'react';
import Offer from './Offer';


const offers = [
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <g filter="url(#filter0_d_1_75)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3525 7.35247C11.8896 6.81533 12.7764 6.46409 14.1644 6.50282C15.5567 6.54167 17.3074 6.97576 19.3204 7.83846C20.9278 8.52737 22.6558 9.46947 24.4397 10.641C22.6955 12.014 20.9522 13.56 19.2562 15.2561C17.56 16.9522 16.0141 18.6956 14.6409 20.4398C13.4695 18.6559 12.5274 16.9279 11.8385 15.3204C10.9758 13.3074 10.5417 11.5567 10.5028 10.1644C10.4641 8.77643 10.8153 7.88962 11.3525 7.35247ZM20.5021 5.08103C22.5655 5.96532 24.7645 7.20419 27 8.74891C29.2354 7.2042 31.4345 5.96534 33.4978 5.08105C35.7178 4.1296 37.8541 3.55696 39.7518 3.50401C41.654 3.45093 43.4604 3.92279 44.7688 5.23118C46.0771 6.53957 46.549 8.34598 46.4959 10.2481C46.443 12.1459 45.8703 14.2821 44.9189 16.5022C44.0346 18.5655 42.7957 20.7646 41.251 23.0001C42.7957 25.2354 44.0345 27.4344 44.9187 29.4977C45.8702 31.7178 46.4428 33.854 46.4957 35.7518C46.5488 37.6539 46.077 39.4603 44.7686 40.7687C43.4602 42.0771 41.6538 42.549 39.7517 42.4959C37.8539 42.4429 35.7176 41.8703 33.4976 40.9189C31.4343 40.0346 29.2353 38.7958 27 37.2511C24.7646 38.7958 22.5656 40.0346 20.5023 40.9189C18.2823 41.8703 16.146 42.443 14.2482 42.4959C12.3461 42.549 10.5397 42.0771 9.23133 40.7687C7.92295 39.4604 7.45109 37.6539 7.50417 35.7518C7.55712 33.854 8.12976 31.7178 9.0812 29.4977C9.96546 27.4345 11.2043 25.2354 12.7489 23.0001C11.2042 20.7646 9.96532 18.5655 9.08102 16.5022C8.12958 14.2821 7.55694 12.1459 7.50399 10.2481C7.45091 8.34596 7.92277 6.53954 9.23115 5.23116C10.5395 3.92277 12.3459 3.45091 14.2481 3.50399C16.1458 3.55694 18.2821 4.12958 20.5021 5.08103ZM21.3775 17.3774C23.2315 15.5233 25.1291 13.8734 27 12.4534C28.8709 13.8734 30.7684 15.5233 32.6224 17.3774C34.4765 19.2315 36.1265 21.1291 37.5465 23.0001C36.1265 24.871 34.4766 26.7685 32.6226 28.6226C30.7685 30.4767 28.8709 32.1266 27 33.5466C25.129 32.1266 23.2314 30.4767 21.3773 28.6225C19.5233 26.7685 17.8734 24.871 16.4534 23.0001C17.8734 21.1291 19.5234 19.2315 21.3775 17.3774ZM34.7437 15.256C36.4399 16.9522 37.9859 18.6956 39.359 20.4398C40.5305 18.6559 41.4725 16.9279 42.1615 15.3204C43.0242 13.3075 43.4582 11.5568 43.4971 10.1644C43.5358 8.77646 43.1846 7.88964 42.6474 7.3525C42.1103 6.81535 41.2235 6.46411 39.8355 6.50284C38.4432 6.54169 36.6925 6.97578 34.6796 7.83848C33.0721 8.52739 31.3441 9.46948 29.5602 10.641C31.3044 12.014 33.0477 13.56 34.7437 15.256ZM34.7439 30.7439C36.44 29.0478 37.9859 27.3045 39.359 25.5604C40.5304 27.3442 41.4724 29.0721 42.1613 30.6795C43.024 32.6924 43.4581 34.4431 43.4969 35.8355C43.5356 37.2234 43.1844 38.1103 42.6473 38.6474C42.1101 39.1846 41.2233 39.5358 39.8353 39.4971C38.443 39.4582 36.6923 39.0241 34.6794 38.1614C33.072 37.4725 31.344 36.5305 29.5602 35.3591C31.3045 33.986 33.0478 32.44 34.7439 30.7439ZM19.256 30.7439C20.9521 32.44 22.6955 33.986 24.4397 35.3591C22.6559 36.5305 20.9279 37.4726 19.3205 38.1614C17.3076 39.0241 15.5569 39.4582 14.1646 39.4971C12.7766 39.5358 11.8898 39.1846 11.3527 38.6474C10.8155 38.1103 10.4643 37.2235 10.503 35.8355C10.5419 34.4432 10.9759 32.6925 11.8386 30.6795C12.5275 29.0721 13.4696 27.3442 14.641 25.5604C16.014 27.3045 17.5599 29.0478 19.256 30.7439ZM27 27C29.2091 27 31 25.2091 31 23C31 20.7909 29.2091 19 27 19C24.7909 19 23 20.7909 23 23C23 25.2091 24.7909 27 27 27Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_75" x="0.5" y="0.5" width="52.9999" height="52.9999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_75"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_75" result="shape"/>
      </filter>
    </defs>
</svg>,
    title:'Astronomy 101',
    text:'Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.'
  },
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="54" viewBox="0 0 50 54" fill="none">
    <g filter="url(#filter0_d_1_85)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21 3C18.7909 3 17 4.79086 17 7C17 9.20914 18.7909 11 21 11H29C31.2091 11 33 9.20914 33 7C33 4.79086 31.2091 3 29 3H21ZM14 7.00015H11C8.79086 7.00015 7 8.79101 7 11.0002V39.0002C7 41.2093 8.79086 43.0002 11 43.0002H39C41.2091 43.0002 43 41.2093 43 39.0002V11.0002C43 8.79101 41.2091 7.00015 39 7.00015H36C36 10.8661 32.866 14.0002 29 14.0002H21C17.134 14.0002 14 10.8661 14 7.00015ZM16.25 19C16.25 18.5858 16.5858 18.25 17 18.25H33C33.4142 18.25 33.75 18.5858 33.75 19C33.75 19.4142 33.4142 19.75 33 19.75H17C16.5858 19.75 16.25 19.4142 16.25 19ZM17 26.25C16.5858 26.25 16.25 26.5858 16.25 27C16.25 27.4142 16.5858 27.75 17 27.75H33C33.4142 27.75 33.75 27.4142 33.75 27C33.75 26.5858 33.4142 26.25 33 26.25H17ZM16.25 35C16.25 34.5858 16.5858 34.25 17 34.25H25C25.4142 34.25 25.75 34.5858 25.75 35C25.75 35.4142 25.4142 35.75 25 35.75H17C16.5858 35.75 16.25 35.4142 16.25 35Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_85" x="0" y="0" width="50" height="54.0002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_85"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_85" result="shape"/>
      </filter>
    </defs>
  </svg>,
    title:'Latest Discoveries',
    text:'Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.'
  },
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="24" fill="#A9C2CB"/>
    <g filter="url(#filter0_d_2_158)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2663 30.4255C58.7962 31.3014 58.2926 33.2414 59.1413 34.7586L64.2638 43.9154C65.1125 45.4326 66.9922 45.9524 68.4623 45.0765C69.9323 44.2006 70.436 42.2606 69.5873 40.7434L64.4648 31.5865C63.616 30.0694 61.7363 29.5496 60.2663 30.4255ZM56.1166 35.3403L40.8846 44.4164C38.9246 45.5843 38.253 48.171 39.3847 50.1938L39.6769 50.7162C39.6649 50.7229 39.653 50.7297 39.6412 50.7368L32.093 55.2344L31.3089 53.8327C30.9044 53.1097 29.9904 52.8515 29.2675 53.256C28.5445 53.6604 28.2862 54.5744 28.6907 55.2974L31.7642 60.7915C32.1687 61.5145 33.0826 61.7727 33.8056 61.3682C34.5286 60.9638 34.7868 60.0498 34.3824 59.3268L33.5582 57.8536L41.1418 53.3348L41.4337 53.8566C42.5653 55.8795 45.0716 56.5726 47.0317 55.4047L49.7722 53.7717L41.7998 69.3157C41.4217 70.0528 41.7128 70.9569 42.4499 71.3349C43.187 71.713 44.0911 71.4219 44.4691 70.6848L53.3795 53.3122L62.2898 70.6848C62.6679 71.4219 63.5719 71.713 64.309 71.3349C65.0462 70.9569 65.3372 70.0528 64.9592 69.3157L55.298 50.4791L62.2874 46.3144C62.0494 46.0281 61.8342 45.7161 61.6462 45.38L56.5237 36.2232C56.3632 35.9363 56.2277 35.6411 56.1166 35.3403Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_2_158" x="21.4995" y="27" width="55.5" height="55.5005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_158"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_158" result="shape"/>
      </filter>
    </defs>
  </svg>,
    title:'Space Exploration',
    text:'Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.'
  },
  {
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
    <g filter="url(#filter0_d_1_100)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6804 14.2435C30.6847 13.7113 29.6089 13.3545 28.5 13.1851V3.05616C31.2687 3.26439 33.9696 4.04739 36.428 5.36141C39.3286 6.91184 41.8022 9.15371 43.6294 11.8884C45.4567 14.6231 46.5814 17.7663 46.9037 21.0395C46.9188 21.1929 46.9322 21.3463 46.9437 21.4998H36.8148C36.5956 20.0653 36.0641 18.6939 35.2555 17.4837C34.3484 16.1261 33.1204 15.0132 31.6804 14.2435ZM15.8886 6.37044C18.7604 4.45158 22.0727 3.3139 25.5 3.05615V13.1851C24.0693 13.4037 22.6974 13.9336 21.4839 14.7444C19.8511 15.8354 18.5785 17.386 17.8271 19.2003C17.0756 21.0145 16.8789 23.0108 17.262 24.9368C17.5468 26.3682 18.1422 27.713 18.9993 28.8793L11.8371 36.0415C9.59583 33.4358 8.05812 30.2892 7.3843 26.9016C6.6126 23.022 7.00867 19.0007 8.52242 15.3462C10.0362 11.6916 12.5996 8.56807 15.8886 6.37044ZM13.9584 38.1628C16.0635 39.9734 18.5269 41.3295 21.1944 42.1386C24.3418 43.0934 27.676 43.2572 30.9019 42.6155C34.0977 41.9799 37.0893 40.5731 39.6168 38.5181L30.6027 32.2519C30.0646 32.4614 29.5074 32.6244 28.9371 32.7378C27.3356 33.0563 25.6804 32.975 24.1179 32.501C23.0375 32.1733 22.0246 31.6649 21.1206 31.0006L13.9584 38.1628ZM36.173 26.7994C36.4798 26.0587 36.6946 25.2864 36.8148 24.4998H46.9437C46.7851 26.6086 46.2925 28.6863 45.4776 30.6535C44.5998 32.7727 43.367 34.7181 41.8389 36.4091L33.431 30.5644C34.63 29.5451 35.5702 28.2548 36.173 26.7994Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_100" x="0" y="0.0561523" width="53.9437" height="53.9437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="3.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.388451 0 0 0 0 0.459239 0 0 0 0 0.484722 0 0 0 0.8 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_100"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_100" result="shape"/>
      </filter>
    </defs>
  </svg>,
    title:'Space Technology',
    text:'Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.'
  },
]

function Possibilities() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-[40px]">
      <div className='mainTitle w-[327px]  text-[32px] lg:w-[375px] lg:text-[40px] xl:text-[64px] xl:w-[573px]'>
        Join our vibrant community of space enthusiasts where you can
      </div>
      <div className=' grid lg:grid-cols-2 gap-[32px] xl:gap-[104px]'>
        {offers.map(el => <Offer icon={el.icon} title={el.title} text={el.text}/>)}
      </div>
    </div>
  );
}

export default Possibilities;
