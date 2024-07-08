import React, { useState } from 'react';
import Card from './Card';
import './Testimonial.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonial = (props) =>{
    const reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
      if(index-1 <0 ){
         setIndex(reviews.length-1);
      }else{
        setIndex(index-1);
      }
    }
    function rightShiftHandler(){
      if(index+1 >= reviews.length){
        setIndex(0);
      }else{
        setIndex(index+1);
      }

    }
    function surpriseMeHandler(){
      let randomIndex = Math.floor((Math.random() * reviews.length));
      setIndex(randomIndex);

    }
    return (
      <div className='testimonial'> 
        <Card reviews = {reviews[index]}></Card>
        <div className='lr-btn'>  
                <button onClick={leftShiftHandler} className='left-btn'> <IoIosArrowBack /> </button>
                <button onClick={rightShiftHandler} className='right-btn'> <IoIosArrowForward /> </button>
            </div>
            <div onClick={surpriseMeHandler} className='surprise-div'>
                <button className='surprise-btn'>Surprise Me</button>
            </div>
      </div>
    );
}
export default Testimonial;