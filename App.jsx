import React from 'react';
import AboutSchool from './Components/AboutSchool';
import NameLogo from './Components/NameLogo'; 
import SocialMediaBar from './Components/SocialMediaBar';
import ImageBox from './Components/ImageBox';



const App = () => {
  return (
    <div className="App">
      <ImageBox/>
      <NameLogo />
      <SocialMediaBar/>
      <AboutSchool />
    </div>
  );
};


export default App;
