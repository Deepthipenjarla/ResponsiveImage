import React from 'react';
import Navigation from './components/header/Navigation';
import Main from './components/header/main/Main';
import Logotipes from './components/logotipes/Logotipes';
import Possibilities from './components/possibilities/Possibilities';
import EducResources from './components/educResources/EducResources';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="flex flex-col gap-[70px] px-[24px] py-[26px]  lg:px-[40px]  xl:px-[120px] xl:max-w-[1920px] xl:m-auto  font-body lg:gap-[120px]">
      <Navigation />
      <Main/>
      <Logotipes />
      <Possibilities />
      <EducResources />
      <Join />
      <Footer />
     
    </div>
  );
}

export default App;
