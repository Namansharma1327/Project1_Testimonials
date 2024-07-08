// import logo from './logo.svg';
import './App.css';
import React from 'react';
import reviews from './data';
import Testimonial from './components/Testimonial';
const App = ()=>{ 
  return(
    <div className='wrapper'>
      <div className='inner-wrapper'>
        <h1 className='heading'>Our Testimonials</h1>
        {/* <div className="bg-voiler-400 h-[4px] w-[1/5] mt-1"></div> */}
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
