import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Card.css';




const Card = (props)=>{
    const review = props.reviews;
    return(
        <div className='card'>
            <div className='img-div'>
                <img className='image' src={review.image}></img>
            </div>

            <div className='name-div'>
                <p>{review.name}</p>
            </div>

            <div className='job-div'>
                <p>{review.job}</p>
            </div>

            <div className='icon-left'>
                <FaQuoteLeft/>
            </div>

            <div className='text'>
              {review.text}
            </div>

            <div className='icon-right'>
                <FaQuoteRight/>
            </div>

        </div>

    );

}
export default Card;