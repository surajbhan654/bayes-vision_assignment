import React from 'react'
import "./section1.css";

export const Section1 = () => {
  return (
    <div className='section1-container'>
        <div className='section1-img'>
            <img className='section1-fullImg' src='https://i.pinimg.com/736x/d5/1a/7d/d51a7dfd9250eeefcdec5259b1b858cc.jpg' />
        </div>
         
         <div className='section1-containts'>
            <p className='section1-containts1'> Empower your business with Advanced Vision Analytics Solutions.</p>
            <h1 className='section1-containts2'> Cutting-Edge technology meets Human Action Intelligence </h1>
            <button className='section1-btn'> SEE OUT PRODUCTS </button>
         </div>
    </div>
  )
}
