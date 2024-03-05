import React from 'react';
import Banner from './Banner';
import MainInfo from './MainInfo';




function Main() {
  return (
    <div className="flex flex-col">
      <Banner/>
      <div className=''>
        <MainInfo />    
      </div>
 
    </div>
  );
}

export default Main;
